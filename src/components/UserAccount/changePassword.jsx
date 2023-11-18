// import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Container } from "@mui/material";
import React, { useEffect, useState } from 'react';

function changePassword() {
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [showPassword3, setShowPassword3] = React.useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleClickShowPassword3 = () => setShowPassword3((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error('Tidak ada token');
        return;
      }

      const response = await fetch(
        apiUrl + "users/updatepassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "authorization": token,
          },
          body: JSON.stringify({
            currentPassword,
            newPassword,
            confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Password changed successfully");
        alert("Password changed successfully");
      } else {
        console.error(`Failed to change password: ${data.message}`);
        alert(`Failed to change password: ${data.message}`);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      alert(error.message);
    }
  };

  return (
    <>
      <Container className="py-10 px-5">
        <div className="main">
          <div className="box">
            <h3>Change Password</h3>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2, width: "80ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="inputedit">
                <FormControl sx={{ m: 1, width: "80ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Current Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword1 ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword1}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword1 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Current Password"
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "80ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    New Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword2 ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="New Password"
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: "80ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword3 ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword3}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword3 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                  />
                </FormControl>
              </div>
              <div className="buttonedit2">
                <Link to="/profile  " className="buttonedit2">
                  <Button variant="contained">Back</Button>
                </Link>
                <Button variant="contained" onClick={handleChangePassword}>Save Change</Button>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
}

export default changePassword;
