import React from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        margin: '20px auto',
        width: 500,
        justifyContent: 'center',
        padding: '10',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            required
            name="name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            name="email"
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            required
            name="password"
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#38d2d2',
              '&:hover': {
                backgroundColor: 'rgb(41, 132, 132)',
              },
            }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
