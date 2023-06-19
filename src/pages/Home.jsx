import { Grid, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: 'calc(100vh - 64px)',
        backgroundImage:
          'linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)) , url(https://source.unsplash.com/random?phone)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography color={'#38d2d2'} variant="h4" component={'h2'}>
        {' '}
        WELCOME TO THE PHONEBOOK APP
      </Typography>
      <NavLink to="/login">
        <Button
          sx={{
            color: '#38d2d2',
            backgroundColor: 'transparent',
            border: '1px solid #38d2d2',
            mt: 8,
            '&:hover': { backgroundColor: '#38d2d2', color: 'black' },
          }}
        >
          Let's start
        </Button>
      </NavLink>
    </Grid>
  );
};

export default Home;
