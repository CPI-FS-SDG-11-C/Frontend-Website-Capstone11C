import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function ListRatingComment() {
  return (
    <>
      <ListItem style={{ paddingLeft: 3, marginTop: 5 }}>
        <ListItemAvatar>
          <Avatar alt="Nama Pengguna" src="{person}" />
        </ListItemAvatar>
        <ListItemText primary="Nama Pengguna" secondary="08/11/2023" />
      </ListItem>
      <Rating name="read-only" value={3} readOnly />
      <Typography
        gutterBottom
        style={{ color: "GrayText", fontSize: "16px", paddingLeft: 3 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
        dignissim justo. Nulla ut facilisis ligula.
      </Typography>
      <Divider className="my-4" />
    </>
  );
}
