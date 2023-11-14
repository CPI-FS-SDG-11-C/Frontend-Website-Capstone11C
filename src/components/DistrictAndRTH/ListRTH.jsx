// import * as React from 'react';
import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";
import DetailRTH from "./DetailRTH"
// import { useDataContext } from "./DataContext";

export default function ListRTH({ data }) {
  // const { showDetail, showDetailCard, hideDetailCard } = useDataContext();
  return (
    <>
      <div style={{ overflowX: "auto", gap: "50px", padding: 5 }}>
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
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))',
                  color: "white",
                  overflow: "hidden",
                  width: "100%",
                  paddingBottom: "3px",
                  paddingLeft:"5px", // Adjust the value of padding as needed
                  paddingRight:"5px", // Adjust the value of padding as needed
                  paddingTop:"16px" // Adjust the value of padding as needed
                   // Adjust the value of padding as needed
                }}
              >
                <Typography
                  component="div"
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
      </div>
      <div
        style={{ overflow: "visible", position: "absolute" }}
        className="z-50"
      >
        <DetailRTH  />
      </div>
    </>
  );
}
