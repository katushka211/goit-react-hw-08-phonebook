import { Grid, Typography } from '@mui/material';
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
      }}
    >
      <Typography color={'#38d2d2'} variant="h4" component={'h2'}>
        {' '}
        WELCOME TO THE PHONEBOOK APP
      </Typography>
    </Grid>
  );
};

export default Home;
