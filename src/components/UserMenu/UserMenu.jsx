import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';
import { useAuth } from '../../hooks/useAuth';
import { Box, Typography, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box
      component="div"
      sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
    >
      <Typography component="p">Welcome,{user.name} </Typography>
      <Button
        sx={{ color: 'white', '&:hover': { color: 'black' } }}
        type="button"
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </Box>
  );
};
