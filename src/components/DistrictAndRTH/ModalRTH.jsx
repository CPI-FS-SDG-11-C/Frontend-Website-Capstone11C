import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

import ListRecomendation from "../Recomendation/ListRecomendation";
import FormRatingComment from "../RatingComment/FormRatingComment";
import ListRatingComment from "../RatingComment/ListRatingComment";

import Axios from "axios";

export default function ModalRTH({ open, handleClose, rth }) {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
 

  async function fetchDataReview() {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await Axios.get(apiUrl + `rths/${rth._id}/reviews`);
      setLoading(false);
      return response.data.data.reviews;
    } catch (error) {
      console.error(error);
      setLoading(false);
      return [];
    }
  }


  useEffect(() => {
    async function loadData() {
      try {
        const reviewData = await fetchDataReview();
        setReview(reviewData);
      } catch (error) {
        console.error(error);
        setReview([]); 
      }
    }

    loadData();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "44%",
    transform: "translate(-50%, -50%)",
    width: 360,
    height: 630,
    bgcolor: "background.paper",
    boxShadow: 24,
    overflowY: "auto",
    borderRadius: 2,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CardMedia
          component="img"
          height="250"
          width="100"
          image="https://lapispahlawan.co.id/uploads/6/2023-01/taman_surabaya.jpg"
          alt="green iguana"
        />
        <Box sx={{ padding: 2 }}>
          <Typography
            style={{ fontSize: "27px", fontWeight: "bold" }}
            id="modal-modal-title"
          >
            {rth.Nama}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            style={{ color: "GrayText", paddingLeft: 3 }}
          >
            {rth.Luas} km²
          </Typography>
          <Divider className="my-4" />
          <Typography style={{ fontSize: "20px", fontWeight: "inherit" }}>
            Location
          </Typography>
          <Typography
            style={{
              fontSize: "13px",
              fontWeight: "inherit",
              color: "GrayText",
            }}
          >
            Kelurahan : {rth.Kelurahan},
          </Typography>
          <Typography
            style={{
              fontSize: "13px",
              fontWeight: "inherit",
              color: "GrayText",
            }}
          >
            {rth.Lokasi}
          </Typography>
          {/* data text RTH End */}

          <Typography
            style={{ fontSize: "20px", fontWeight: "inherit", marginTop: 20 }}
          >
            Recomendation
          </Typography>
          
          {/* list wisata */}
          <ListRecomendation data ={rth}/>

          <Typography
            style={{ fontSize: "20px", fontWeight: "inherit", marginTop: 20 }}
          >
            Rating & Comment
          </Typography>

          {/* form komentar dan rating */}
          <FormRatingComment  />

          <Divider className="my-4" />

          {/* list komentar dan rating */}
          <Box>
            {Array.isArray(review) && review.length > 0 ? (
              review.map((arr) => (
                <ListRatingComment key={arr._id} data={arr} />
              ))
            ) : (
              <p>jadilah yang pertama berkomentar.</p>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
