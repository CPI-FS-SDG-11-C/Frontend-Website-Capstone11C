// import * as React from 'react';
import React, { useState } from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
// import DetailRTH from "./DetailRTH";
import ModalRTH from "./ModalRTH";


export default function ListRTH({ data }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        style={{ overflowX: "auto", gap: "50px", padding: 5 }} onClick={handleOpen}
      >
        <Paper elevation={3} style={{ minWidth: 100 }}>
          <Card sx={{ maxWidth: 350, position: "relative" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50"
                width="240"
                image="https://cdn-cms.pgimgs.com/static/2021/06/2.-8-Desain-Landscape-Taman-Bikin-Cantik-Rumah-2.jpg"
                alt={data.Nama}
                style={{ position: "relative" }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))",
                  color: "white",
                  overflow: "hidden",
                  width: "100%",
                  paddingBottom: "3px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingTop: "16px",
                
                }}
              >
                <Typography
                  component="Box"
                  sx={{
                    textOverflow: "ellipsis",
                    whiteSpace: "wrap",
                    overflow: "hidden",
                    fontSize: "14px",
                  }}
                >
                  {data.Nama}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </Box>
      <Box>
        {/* <DetailRTH  /> */}
        <ModalRTH open={open} handleClose={handleClose} rth={data}/>
      </Box>
    </>
  );
}
