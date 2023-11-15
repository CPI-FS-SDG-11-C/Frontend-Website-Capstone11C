import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        HijauSantara
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "Josefin Sans", "sans-serif"].join(","),
  },
});

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registrationData = {
      username,
      email,
      password,
      phone_number: phoneNumber,
    };

    try {
      const response = await axios.post(
        "https://sunrise-mousy-restaurant.glitch.me/api/users/register",
        registrationData
      );
      console.log(response.data);
      alert("Pendaftaran berhasil!");
      navigate('/login');
    } catch (error) {
      console.error("Error during API request:", error);
      if (error.response) {
        console.error("Server responded with error data:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
      alert("Pendaftaran gagal. Pengguna telah terdaftar.");
    }
    // await axios.post(
    //   "https://sunrise-mousy-restaurant.glitch.me/api/users/register", registrationData
    // ).then((response) => {
    //   if (response.status === 200) {
    //     alert("Pendaftaran berhasil!");
    //   } else {
    //     alert("Pendaftaran gagal");
    //   }
    // })
    //   .catch((error) => { 
    //     alert(error.message);
    //   });

    // try {

    //   if (response.data.success) {
    //     alert("Pendaftaran berhasil!");
    //     console.log(response.data);
    //   } else {
    //     alert("Terjadi kesalahan saat pendaftaran.");
    //     console.log(response.data);
    //   }
    // } catch (error) {
    //   console.error("Terjadi kesalahan saat mengirim data ke API: ", error);
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="h-screen">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main" }}
            className="avatar-login"
          >
            <LockOutlinedIcon sx={{ width: 50, height: 50 }} />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            className="font-bold"
            sx={{ mt: 1, fontFamily: "Josefin Sans" }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="auth-button"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item className="mx-auto">
                <Link href="/login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
