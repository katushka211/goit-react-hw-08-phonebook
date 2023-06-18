import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Box, Button } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component="nav">
      <NavLink to="/">
        <Button>
          <HomeRoundedIcon
            fontSize="medium"
            sx={{
              color: 'white',
              '&:hover': {
                color: 'black',
              },
            }}
          />
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button sx={{ color: 'white', '&:hover': { color: 'black' } }}>
            Contacts
          </Button>
        </NavLink>
      )}
    </Box>
  );
};
