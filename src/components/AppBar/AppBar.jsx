import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const AplicationBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#38d2d2' }}>
      <Toolbar>
        <Navigation />
        <Typography
          variant="h5"
          component={'span'}
          sx={{ flexGrow: 1, ml: 20 }}
        >
          PhoneBook
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
