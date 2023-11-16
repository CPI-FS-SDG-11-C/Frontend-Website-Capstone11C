// import * as React from 'react';
import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import Axios from "axios";

export default function ListRecomendation({ data }) {
  console.log("masuk rekomendasi"+data);

  const [attraction, setAttraction] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchDataAtt() {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await Axios.get(apiUrl + `attractions/${data._id}`);
      setLoading(false)
      return response.data.data;

    } catch (error) {
      setLoading(false)
      return [];

    }
  }
  useEffect(() => {
    async function loadData() {
      try {
        const attractionData = await fetchDataAtt();
        setAttraction(attractionData);
      } catch (error) {
        console.error(error);
        setAttraction([]);
      }
    }

    loadData();
  }, []);
  console.log(`attractions/${data._id}`);
  

  
function attCard(data) {
    return (
      <Paper elevation={3} style={{ minWidth: 100 }} key={data._id}>
        <Card sx={{ maxWidth: 100, position: "relative" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="130"
              width="100"
              image="https://asset.kompas.com/crops/S2blD15syarYqbuetSC5SI0NAME=/0x0:1280x853/750x500/data/photo/2022/09/09/631a845ec178c.jpeg"
              alt="green iguana"
              style={{ position: "relative" }}
            />
            <CardContent
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                background:
                  "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))",
                color: "white",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Typography
                gutterBottom
                component="div"
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  fontSize: "14px",
                }}
              >
                {data.nama}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    );
  };

  return (
    <>
    <div style={{ overflowX: "auto", display: "flex", gap: "10px", padding: 5}}>
    {loading ? (<>
      <Skeleton variant="rounded" width={100} height={140} />
      <Skeleton variant="rounded" width={100} height={140} />
      <Skeleton variant="rounded" width={100} height={140} />
    </>
        ) :  attraction.length > 0 ? (
          attraction.map((arr) => attCard(arr))
        ) : (
          <p>No Attraction here...</p>
        )}
    </div>
    </>
  );
}
