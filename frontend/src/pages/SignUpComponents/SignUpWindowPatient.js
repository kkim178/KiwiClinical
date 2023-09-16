import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();



export default function SignUpWindow(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    // Construct the data to send in the POST request
    const formData = {
      age: data.get('age'),
      race: data.get('race'),
      weight: data.get('weight'),
      height: data.get('height'),
      email: data.get('email'),
      phone_number: data.get('phone-number'),      
    };
  
    console.log(formData);
  
    // try {
    //   const response = await axios.post('YOUR_API_ENDPOINT_URL', formData);
  
    //   if (response.status === 200) {
    //     // The POST request was successful, you can handle the success here
    //     console.log('Signup successful');
    //     // You can also redirect the user to their homepage or perform any other actions here
    //   } else {
    //     // The POST request failed, handle errors here
    //     console.error('Signup failed');
    //   }
    // } catch (error) {
    //   // Handle network errors or other exceptions here
    //   console.error('An error occurred', error);
    // }
  };

  return (
    <div
      style={props.style}
    >
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone-number"
                  label="Phone Number"
                  name="phone-number"
                />
              </Grid>
              <h3>Medical Information:</h3>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="age"
                  label="Age"
                  type="age"
                  id="age"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="height"
                  label="Height (in)"
                  type="height"
                  id="height"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="weight"
                  label="Weight (lb)"
                  type="weight"
                  id="weight"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="race"
                  label="Race"
                  type="race"
                  id="race"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    
  );
}