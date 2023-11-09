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

// import { useDataContext } from "./DataContext";


export default function ListRecomendation() {
  // const { showDetail, showDetailCard, hideDetailCard } = useDataContext();
  return (
    <>
    <div style={{ overflowX: "auto", display: "flex", gap: "10px", padding: 5}}>
    <Paper 
      elevation={3} 
      style={{ minWidth: 100}}      
    >
      <Card sx={{ maxWidth: 100, position: 'relative' }}>
        <CardActionArea  >
          <CardMedia
            component="img"
            height="130"
            width="100"
            image="https://placehold.co/700x300"
            alt="green iguana"
            style={{ position: 'relative' }}
          />
          <CardContent  style={{ position: 'absolute', bottom: 0, left: 0,  background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))', color: 'white', overflow: 'hidden', width: '100%' }}>
            <Typography gutterBottom component="div"  style={{ textOverflow: 'ellipsis', whiteSpace: 'wrap', overflow: 'hidden', fontSize: '14px' }}>
              Kedai District-13
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
    <Paper 
      elevation={3} 
      style={{ minWidth: 100}}      
    >
      <Card sx={{ maxWidth: 100, position: 'relative' }}>
        <CardActionArea  >
          <CardMedia
            component="img"
            height="130"
            width="100"
            image="https://placehold.co/700x300"
            alt="green iguana"
            style={{ position: 'relative' }}
          />
          <CardContent  style={{ position: 'absolute', bottom: 0, left: 0,  background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))', color: 'white', overflow: 'hidden', width: '100%' }}>
            <Typography gutterBottom component="div"  style={{ textOverflow: 'ellipsis', whiteSpace: 'wrap', overflow: 'hidden', fontSize: '14px' }}>
              Kedai District-13
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
    <Paper 
      elevation={3} 
      style={{ minWidth: 100}}      
    >
      <Card sx={{ maxWidth: 100, position: 'relative' }}>
        <CardActionArea  >
          <CardMedia
            component="img"
            height="130"
            width="100"
            image="https://placehold.co/700x300"
            alt="green iguana"
            style={{ position: 'relative' }}
          />
          <CardContent  style={{ position: 'absolute', bottom: 0, left: 0,  background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))', color: 'white', overflow: 'hidden', width: '100%' }}>
            <Typography gutterBottom component="div"  style={{ textOverflow: 'ellipsis', whiteSpace: 'wrap', overflow: 'hidden', fontSize: '14px' }}>
              Kedai District-13
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
    <Paper 
      elevation={3} 
      style={{ minWidth: 100}}      
    >
      <Card sx={{ maxWidth: 100, position: 'relative' }}>
        <CardActionArea  >
          <CardMedia
            component="img"
            height="130"
            width="100"
            image="https://placehold.co/700x300"
            alt="green iguana"
            style={{ position: 'relative' }}
          />
          <CardContent  style={{ position: 'absolute', bottom: 0, left: 0,  background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))', color: 'white', overflow: 'hidden', width: '100%' }}>
            <Typography gutterBottom component="div"  style={{ textOverflow: 'ellipsis', whiteSpace: 'wrap', overflow: 'hidden', fontSize: '14px' }}>
              Kedai District-13
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>

    </div>
    </>
  );
}