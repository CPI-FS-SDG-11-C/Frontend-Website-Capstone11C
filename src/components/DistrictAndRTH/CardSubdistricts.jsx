import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import ListRTH from "./ListRTH";

export default function DistrictCard({ data }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="py-1">
      <Accordion
        expanded={expanded === data.kec_id}
        onChange={handleChange(data.kec_id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Typography
              sx={{ width: "70%", flexShrink: 0, fontWeight: "medium" }}
              style={{ paddingLeft: 15 }}
            >
              {data.nama_kec}
            </Typography>
            <Typography sx={{ color: "text.secondary", width: "5%" }}>
              {" "}
              -{" "}
            </Typography>
            <Typography sx={{ color: "text.primary", width: "25%" }}>
              {data.percentage}%
            </Typography>
          </Stack>
        </AccordionSummary>

        <AccordionDetails style={{ padding: 7, paddingTop: 0 }}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            style={{ padding: 0 }}
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText
                style={{ fontSize: "10px" }}
                primary="Luas Wilayah"
                secondary={`${data.totalLuas} km²`}
              />
            </ListItemButton>
          </List>
          <Divider className="my-4" />
          <Typography
            style={{ fontSize: "14px" }}
            sx={{ color: "text.secondary", fontWeight: "medium" }}
            className="pb-3"
          >
            Data Taman
          </Typography>
          <div>
            {Array.isArray(data.data_RTH) && data.data_RTH.length > 0 ? (
              data.data_RTH.map((arr) => <ListRTH key={arr._id} data={arr} />)
            ) : (
              <p>No RTH data available.</p>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
