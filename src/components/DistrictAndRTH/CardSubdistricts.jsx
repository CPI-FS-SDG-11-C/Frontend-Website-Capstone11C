import React from "react";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import ListRTH from "./ListRTH";

export default function DistrictCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
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
              style={{ paddingLeft: 15}}
            >
              Wonokromo
            </Typography>
            <Typography sx={{ color: "text.secondary", width: "5%" }}>
              {" "}
              -{" "}
            </Typography>
            <Typography sx={{ color: "text.primary", width: "25%" }} >
              1.02%
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
            <ListItemButton style={{ paddingTop: 0, paddingBottom: 0}}>
              <ListItemText style={{  fontSize: "10px" }} primary="Luas Wilayah" secondary="220000 km" />
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
          <ListRTH />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
