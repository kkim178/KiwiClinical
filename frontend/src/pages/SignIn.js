import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { useAppContext } from '../App.js';
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const { email, setEmail } = useAppContext();

  //-----------------------------------------------------------------------------------------------------
  //cosnt [loading, setLoading] = useState(false);
  async function postClinician(formInfo) {
    //setLoading(true);
    console.log("post request initiated")
    await axios.post('https://hip-tires-pick.tunnelapp.dev/clinician_post' , formInfo)
      .then((reponse) => {
        console.log(reponse.data);
        navigate('/researcherhome')
      }).catch((error) => {
        console.error('Error:', error);
      }).finally(() => {
          //setLoading(false)
        console.log("post request completed");
      })
  }
  //-----------------------------------------------------------------------------------------------------

  // async function getClinician() {
  //   //setLoading(true);
  //   await axios.get('https://hip-tires-pick.tunnelapp.dev/clinician_post' , {params: {'email': mefef}})
  //     .then((reponse) => {
  //       console.log(reponse.data)
  //     }).catch(() => {

  //     }).finally(() => {
  //         //setLoading(false)
  //     })
  // }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
        email: data.get('email'),
    }
    
    console.log(formData);
    setEmail(data.get('email'))

    navigate('/researcherhome')
    

  };

  useEffect(() => {
    console.log("email set to: " + email);
  }, [email])



  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/new" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}