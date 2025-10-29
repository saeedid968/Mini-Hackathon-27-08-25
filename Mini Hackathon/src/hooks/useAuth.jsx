import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/auth-slice';
export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    ...auth,
    logout: handleLogout,
  };
};