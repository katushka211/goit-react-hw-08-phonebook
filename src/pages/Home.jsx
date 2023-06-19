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
          'linear-gradient(to right, rgba(29, 29, 36, 0.4), rgba(29, 29, 36, 0.4)) , url(https://source.unsplash.com/random?phone)',
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
            fontWeight: '600',
            color: '#38d2d2',
            backgroundColor: 'transparent',
            border: '2px solid #38d2d2',
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
