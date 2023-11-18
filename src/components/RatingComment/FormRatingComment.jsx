import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import Axios from "axios";

export default function FormRatingComment({ rth_id, review, setReview }) {
  const [value, setValue] = useState(0);
  const [comment, setComment] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState({});
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {

    if (!token) {
      console.error("Tidak ada token");
      // alert('Tidak ada token');

      return;
    }
    const fetchUser = async () => {
      try {
        const response = await fetch(
          apiUrl + "/users/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUserData(data.data);
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async () => {
    try {

      const response = await fetch(
        `https://enchanting-laced-raisin.glitch.me/api/rths/${rth_id}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({
            rating: value,
            comment: comment,
          }),
        }
      );

      const data = await response.json();
      setValue(0);
      setComment("");
      setReview(review => [...review, data.data]);

      if (response.ok) {
        console.log("comment successfully");
        alert("comment successfully");
      } else {
        console.error(`Failed to send comment: ${data.message}`);
        alert(`Failed to send comment: ${data.message}`);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <ListItem style={{ paddingLeft: 3, marginTop: 5 }}>
        <ListItemAvatar>
          <Avatar alt={userData.username} src={userData.username} />
        </ListItemAvatar>
        <ListItemText primary={userData.username} />
      </ListItem>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={3}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Enter your comments here..."
        />
        <Button
          variant="text"
          type="button"
          sx={{ padding: 1, marginTop: 1 }}
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
