import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <Button sx={{ color: 'white', '&:hover': { color: 'black' } }}>
          Register
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button sx={{ color: 'white', '&:hover': { color: 'black' } }}>
          Log In
        </Button>
      </NavLink>
    </div>
  );
};
