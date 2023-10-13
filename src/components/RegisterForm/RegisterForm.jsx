import React from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Avatar,
  Link,
} from '@mui/material';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name should be at least 3 characters')
    .max(30, 'Name should not exceed 30 characters'),
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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Box
      sx={{
        minHeight: '100%',
        component: 'main',
      }}
    >
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
                <LockOpenOutlinedIcon />
              </Avatar>
              <Typography component="h2" variant="h5">
                Sign up
              </Typography>
            </Box>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  label="Username"
                  variant="outlined"
                  fullWidth
                  required
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error"
                  style={{ color: 'red', fontSize: '14px' }}
                />
              </Grid>
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
                  Register
                </Button>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  gap={'5px'}
                  alignItems={'center'}
                >
                  <Typography component={'span'}>
                    Already have an account?
                  </Typography>
                  <Link
                    href="/goit-react-hw-08-phonebook/login"
                    variant="body2"
                    color={'rgb(41, 132, 132)'}
                    fontSize={'16px'}
                  >
                    Log In
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Formik>
    </Box>
  );
};
