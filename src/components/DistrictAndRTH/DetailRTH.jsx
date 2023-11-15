import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ListRecomendation from "../Recomendation/ListRecomendation";
import FormRatingComment from "../RatingComment/FormRatingComment";
import ListRatingComment from "../RatingComment/ListRatingComment";

export default function DetailRTH() {

  return (
    <div>
      <Card
        sx={{ maxWidth: 345, height: "100%", overflowY: "auto" }}
        
      >
        <CardMedia
          component="img"
          height="160"
          width="100"
          image="https://placehold.co/600x400"
          alt="green iguana"
        />
        <CardContent>
          {/* data text RTH Start */}
          <Typography
            style={{ fontSize: "27px", fontWeight: "bold" }}
            component="div"
          >
            Taman. Lansia
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            style={{ color: "GrayText", paddingLeft: 3 }}
          >
            2694 km²
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
            Kelurahan : Gubeng,
          </Typography>
          <Typography
            style={{
              fontSize: "13px",
              fontWeight: "inherit",
              color: "GrayText",
            }}
          >
            Ex. SPBU Biliton Jl. Raya Gubeng - Jl. Biliton
          </Typography>
          {/* data text RTH End */}

          <Typography
            style={{ fontSize: "20px", fontWeight: "inherit", marginTop: 20 }}
          >
            Recomendation
          </Typography>

          <ListRecomendation />

          <Typography
            style={{ fontSize: "20px", fontWeight: "inherit", marginTop: 20 }}
          >
            Rating & Comment
          </Typography>

          <FormRatingComment />
          <Divider className="my-4" />
          <div >
          <ListRatingComment />
          <ListRatingComment />
          <ListRatingComment />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
