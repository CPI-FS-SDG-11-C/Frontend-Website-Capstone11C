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

const PlaceDetails = ({ place }) => {
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        images={place.photo ? place.photo.image.large.url : ""}
        tittle={place.name}
      />

      {/* isi */}
      <CardContent>
        <Typography gutterBottom variant="h4">
          {place.name} 25%
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Luas Wilayah :</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Jl. Raya Babat Jerawat No.1A, Babat Jerawat, Kec. Pakal, Surabaya, Jawa Timur 60197</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.rangking}
          </Typography>
        </Box>

        <Box>
          <Accordion defaultIndex={[1]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Taman A {/* Props Taman */}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Accordion defaultIndex={[1]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Taman B {/* Props Taman */}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Accordion defaultIndex={[1]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Taman C {/* Props Taman */}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

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
