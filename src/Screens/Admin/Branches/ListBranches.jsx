import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import MiniDrawer from '../../../Components/Drawer/Drawer';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BranchList() {
  const [branches, setBranches] = useState([]);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const gettingData = await getDocs(collection(db, 'branches'));
      const branchData = gettingData.docs.map((e) => ({
        id: e.id,
        ...e.data(),
      }));
      setBranches(branchData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleDelete = async () => {
    try {
      await Promise.all(selected.map((id) => deleteDoc(doc(db, 'branches', id))));
      setBranches((prev) => prev.filter((b) => !selected.includes(b.id)));
      setSelected([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Drawer */}
      <MiniDrawer />

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 , backgroundColor:'#F1F3F4' }}>
        <Box display="flex" justifyContent="flex-end" gap={2} mb={2}>
          <Button
            variant="contained"
            color="error"
            disabled={selected.length === 0}
            onClick={handleDelete}
          >
            Delete Selected
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/dashboard/addbranch')}
          >
            Add Branch
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="branch table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < branches.length
                    }
                    checked={
                      branches.length > 0 && selected.length === branches.length
                    }
                    onChange={(e) =>
                      setSelected(
                        e.target.checked ? branches.map((b) => b.id) : []
                      )
                    }
                  />
                </TableCell>
                <TableCell>ID</TableCell>
                <TableCell align="right">Branch Name</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Manager Email</TableCell>
                <TableCell align="right">Contact Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {branches.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selected.includes(row.id)}
                      onChange={() => handleSelect(row.id)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="right">{row.managerEmail}</TableCell>
                  <TableCell align="right">{row.contact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
