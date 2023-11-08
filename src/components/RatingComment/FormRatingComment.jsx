import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

// import axios from "axios";

export default function FormRatingComment() {
  const [value, setValue] = useState(2);
  const [comment, setComment] = useState("");

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     const data = {
  //       rating: value,
  //       comment: comment,
  //     };

  //     try {
  //       const response = await axios.post("YOUR_API_ENDPOINT", data);

  //       console.log("API response:", response.data);
  //     } catch (error) {
  //       console.error("API request failed:", error);
  //     }
  //   };

  return (
    <>
      <ListItem style={{ paddingLeft: 3, marginTop: 5 }}>
        <ListItemAvatar>
          <Avatar alt="Nama Pengguna" src="{person}" />
        </ListItemAvatar>
        <ListItemText primary="Nama Pengguna" />
      </ListItem>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
        //   onSubmit={handleSubmit}
      >
        <Rating
          name="simple-controlled"
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
          type="submit"
          sx={{ padding: 1, marginTop: 1 }}
          color="primary"
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
