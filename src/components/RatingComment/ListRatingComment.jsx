import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function ListRatingComment({data}) {

  
  // const [loading, setLoading] = useState(true);

  return (
    <>
      <ListItem style={{ paddingLeft: 3, marginTop: 5 }}>
        <ListItemAvatar>
          <Avatar alt={data.user.username} src={data.user.username} />
        </ListItemAvatar>
        <ListItemText primary={data.user.username} secondary={data.created_at} />
      </ListItem>
      <Rating name="read-only" value={data.rating} readOnly />
      <Typography
        gutterBottom
        style={{ color: "GrayText", fontSize: "14px", paddingLeft: 3 }}
      >
        "{data.comment}"
      </Typography>
      <Divider className="my-4" />
    </>
  );
}
