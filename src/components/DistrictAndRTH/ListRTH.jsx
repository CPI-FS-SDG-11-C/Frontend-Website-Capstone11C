// import * as React from 'react';
import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { CardActionArea } from '@mui/material';
import DetailRTH from "./DetailRTH"
// import { useDataContext } from "./DataContext";


export default function ListRTH() {
  // const { showDetail, showDetailCard, hideDetailCard } = useDataContext();
  return (
    <>
    <div style={{ overflowX: "auto", gap: "50px", padding: 5}}>

    <Paper 
      elevation={3} 
      style={{ minWidth: 100}}
      
    >
      <Card sx={{ maxWidth: 260, position: 'relative' }}>
        <CardActionArea  >
          <CardMedia
            component="img"
            height="50"
            width="240"
            image="https://placehold.co/700x300"
            alt="green iguana"
            style={{ position: 'relative' }}
          />
          <CardContent  style={{ position: 'absolute', bottom: 0, left: 0,  background: 'rgba(0, 0, 0, 0.3)', color: 'white', overflow: 'hidden', width: '100%' }}>
            <Typography gutterBottom component="div"  style={{ textOverflow: 'ellipsis', whiteSpace: 'wrap', overflow: 'hidden', fontSize: '14px' }}>
              Taman Cempaka
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>

 


    
    </div>
    <div style={{ overflow: "visible"}}>
    <DetailRTH  />
    </div>
    </>
  );
}