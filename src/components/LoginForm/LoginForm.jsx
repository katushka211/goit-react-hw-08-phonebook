import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Avatar,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password should be at least 7 characters')
    .test(
      'no-password',
      'Password cannot contain the word "password"',
      value => !value.toLowerCase().includes('password')
    ),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box
          sx={{
            backgroundColor: 'rgba(248, 248, 248, 0.188)',
            minHeight: '100%',
          }}
        >
          <Box
            sx={{
              margin: '0 auto',
              width: 500,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10',
            }}
          >
            <Form>
              <Box
                sx={{
                  marginTop: 8,
                  marginBottom: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'rgb(41, 132, 132)' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h2" variant="h5">
                  Log In
                </Typography>
              </Box>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    type="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                    style={{ color: 'red', fontSize: '14px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    name="password"
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                    style={{ color: 'red', fontSize: '14px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#38d2d2',
                      marginBottom: '20px',
                      '&:hover': {
                        backgroundColor: 'rgb(41, 132, 132)',
                      },
                    }}
                  >
                    Log In
                  </Button>
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    gap={'5px'}
                    alignItems={'center'}
                  >
                    <Typography component={'span'}>
                      Don't have an account?
                    </Typography>
                    <Link
                      href="/goit-react-hw-08-phonebook/register"
                      variant="body2"
                      color={'rgb(41, 132, 132)'}
                      fontSize={'16px'}
                    >
                      Sign Up
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};
