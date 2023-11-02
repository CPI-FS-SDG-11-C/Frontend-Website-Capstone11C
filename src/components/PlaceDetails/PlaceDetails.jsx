import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import useStyles from "./styles";

const PlaceDetails = ({ data }) => {
  const classes = useStyles();
  console.log("halaman detail")
  console.log(data)

  // akses data setiap RTH
  const dataRTH = data.data_RTH

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        images={data.photo ? data.photo.image.large.url : ""}
        tittle={data.nama_kec}
      />

      
      {/* Kecamatan Start */}
      <CardContent>
        <Typography gutterBottom variant="h4">
          {data.nama_kec} - {data.percentage} %
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Luas Wilayah :</Typography>
          <Typography gutterBottom variant="subtitle1">
            {data.luas_kec}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">{data.nama_kec}</Typography>
          <Typography gutterBottom variant="subtitle1">
            {data.rangking? "5" : "*data ranking*"}
          </Typography>
        </Box>
        {/* Kecamatan End */}

        {/* RTH list  Start*/}
        {dataRTH.map((rth)=> (
        <Box key={rth._id}>
          <Accordion defaultIndex={[1]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {rth.Nama} {/* Props Taman */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(place.web_url, "_blank")}
                >
                  <p>
                  Alamat : {rth.Lokasi} <br />
                  Kelurahan: {rth.Kelurahan} <br />
                  Luas : {rth.Luas}
                  </p>
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        ))}
        {/* RTH list  End*/}

        {/* {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between">
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.displat_name}</Typography>
                    </Box>
                ))} */}

        {/* {place?.cuisine.map(( {name}) => {
                    <Chip key={name} size="small" label={name} className={classes.chip}/>
                }

                )} */}
      </CardContent>
    </Card>
 
  );
};

export default PlaceDetails;
