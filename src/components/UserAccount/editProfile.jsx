// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import React, { useEffect, useState } from 'react';

function editProfile() {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error('Tidak ada token');
      // alert("Tidak ada token");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch("https://soft-held-cobweb.glitch.me/api/users/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "authorization": token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data.data);
          
          if (data.data) {
            setUsername(data.data.username || "");
            setEmail(data.data.email || "");
            setPhoneNumber(data.data.phone_number || "");
          }
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };

    fetchUserProfile();
  }, []);

  const handleEditProfile = async () => {
    try {
      const response = await fetch("https://soft-held-cobweb.glitch.me/api/users/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": token,
        },
        body: JSON.stringify({
          username,
          email,
          phone_number,
        }),
      });

      const data = await response.json();

      if (response.ok) {

        console.log("Profile updated successfully");
        alert("Profile updated successfully");
      } else {
        console.error(`Failed to update profile: ${data.message}`);
        alert(`Failed to update profile: ${data.message}`);
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
            <h3>Edit Profile</h3>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 2, width: "80ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="inputedit">
                <TextField
                  required
                  id="outlined-required"
                  label="Username"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="outlined-number"
                  label="Phone Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="buttonedit2">
                <Link to="/profile" className="buttonedit2">
                  <Button variant="contained">Back</Button>
                </Link>
                <Button variant="contained" onClick={handleEditProfile}>Save Change</Button>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
}

export default editProfile;
