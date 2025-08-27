import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logout from "@mui/icons-material/Logout";
import Person from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import ClassIcon from "@mui/icons-material/Class";
import BookIcon from "@mui/icons-material/Book";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SubjectIcon from "@mui/icons-material/Subject";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const profileMenuOpen = Boolean(anchorEl);
  const [openItems, setOpenItems] = React.useState({});

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleItemClick = (text) => {
    if (open) {
      const newState = {};
      Object.keys(openItems).forEach((key) => {
        newState[key] = false;
      });
      newState[text] = !openItems[text];
      setOpenItems(newState);
    } else {
      navigate(getDefaultPath(text));
    }
  };

  const getDefaultPath = (text) => {
    const item = items.find((i) => i.text === text);
    return item ? item.subItems[1].path : "/";
  };

  // const items = [
  //   {
  //     text: 'Students',
  //     icon: <PeopleIcon />,
  //     subItems: [
  //       { text: 'Student Add', path: '/students/add' },
  //       { text: 'Student List', path: '/students/list' }
  //     ]
  //   },
  //   {
  //     text: 'Teachers',
  //     icon: <MailIcon />,
  //     subItems: [
  //       { text: 'Teacher Add', path: '/teachers/add' },
  //       { text: 'Teacher List', path: '/teachers/list' }
  //     ]
  //   },

  //   {
  //     text: 'Syllabus',
  //     icon: <BookIcon />,
  //     subItems: [
  //       { text: 'Syllabus Add', path: '/syllabus/add' },
  //       { text: 'Syllabus List', path: '/syllabus/list' }
  //     ]
  //   },
  //   {
  //     text: 'Classes',
  //     icon: <ClassIcon />,
  //     subItems: [
  //       { text: 'Class Add', path: '/class/add' },
  //       { text: 'Class List', path: '/class/list' }
  //     ]
  //   },
  //   {
  //     text: 'Fees',
  //     icon: <MonetizationOnIcon />,
  //     subItems: [
  //       { text: 'Fee Structure', path: '/fee/structure' },
  //       { text: 'Fee Pay Now', path: '/fees/payment' },
  //       { text: 'Fee Voucher', path: '/fee/voucher' }
  //     ]
  //   },
  //   {
  //     text: 'Admission',
  //     icon: <AssignmentIcon />,
  //     subItems: [
  //       { text: 'Admission Add', path: '/student/admission' },
  //     ]
  //   },
  //   {
  //     text: 'Exams',
  //     icon: <InboxIcon />,
  //     subItems: [
  //       { text: 'Exam Add', path: '/exam/add' },
  //       { text: 'Exam Results', path: '/exam/result-list' }
  //     ]
  //   },
  //   {
  //     text: 'Subjects',
  //     icon: <SubjectIcon />,
  //     subItems: [
  //       { text: 'Subject Add', path: '/subject/add' },
  //       { text: 'Subject List', path: '/subject/list' }
  //     ]
  //   },
  // ];
  const items = [
    {
      text: "Dashboard",
      icon: <InboxIcon />,
      subItems: [{ text: "Overview", path: "/admin" }],
    },
    {
      text: "Branches",
      icon: <ClassIcon />,
      subItems: [
        { text: "Add Branch", path: "/dashboard/addbranch" },
        { text: "Branch List", path: "/dashboard/listbranch" },
      ],
    },
    {
      text: "Products",
      icon: <BookIcon />,
      subItems: [
        { text: "Add Product", path: "/admin/products/add" },
        { text: "Product List", path: "/admin/products" },
      ],
    },
    {
      text: "Inventory",
      icon: <AssignmentIcon />,
      subItems: [{ text: "All Branches", path: "/admin/inventory" }],
    },
    {
      text: "Employees",
      icon: <PeopleIcon />,
      subItems: [{ text: "Employee List", path: "/admin/employees" }],
    },
    {
      text: "Offers",
      icon: <MonetizationOnIcon />,
      subItems: [{ text: "Manage Offers", path: "/admin/offers" }],
    },
    {
      text: "Orders",
      icon: <MailIcon />,
      subItems: [{ text: "Order List", path: "/admin/orders" }],
    },
  ];

  const navigate = useNavigate();

  const iconColors = [
    "#5C8271",
    "#913D5E",
    "#B58A32",
    "#667B9F",
    "#805D5D",
    "#A0A4B8",
    "#6A5ACD",
    "#D87093",
  ];

  return (
    <>
      <Box sx={{ display: "flex", margin: 0 }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ backgroundColor: "#2E8B57" }}
          open={open}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                color: "#F0F0F0",
                letterSpacing: ".5px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              ZAIQA Admin
            </Typography>

            {/* Profile Icon */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize="large" />
            </IconButton>

            {/* Profile Menu */}
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={profileMenuOpen}
              onClose={handleProfileMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleProfile}>
                <ListItemIcon>
                  <Person fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {items.map(({ text, icon, subItems }, index) => (
              <div key={text}>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    onClick={() => handleItemClick(text)}
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5,
                      },
                      open
                        ? { justifyContent: "initial" }
                        : { justifyContent: "center" },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: "center",
                          // Apply the color here using the index
                          color: iconColors[index % iconColors.length],
                        },
                        open ? { mr: 3 } : { mr: "auto" },
                      ]}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                    />
                    {open &&
                      (openItems[text] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>
                {open && (
                  <Collapse in={openItems[text]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {subItems.map((subItem) => (
                        <ListItemButton
                          key={subItem.text}
                          sx={{ pl: 4 }}
                          onClick={() => navigate(subItem.path)}
                        >
                          <ListItemText primary={subItem.text} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
}
