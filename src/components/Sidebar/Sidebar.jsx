import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

import Menu from "./Menu";
// import DetailRTH from "../DistrictAndRTH/DetailRTH";

export default function Sidebar() {
  // const [open, setOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [showDetailRTH, setShowDetailRTH] = useState(false);

  // const handleLogoutClick = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <div style={{ zIndex: openMenu ? 9999 : 0 }}>
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
      {/* <div style={{ zIndex: showDetailRTH ? 9999 : 0 }} className="mx-auto">
        <DetailRTH
          showDetailRTH={showDetailRTH}
          setShowDetailRTH={setShowDetailRTH}
        />
      </div> */}
      <Box>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <IconButton
            onClick={() => setOpenMenu((openMenu) => !openMenu)}
            sx={{
              height: 75,
              justifyContent: "center",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Divider />
          <List>
            {[
              {
                text: "Home",
                icon: <HomeIcon sx={{ color: "#929191" }} />,
                link: "/home",
              },
              {
                text: "Articles",
                icon: <ArticleIcon sx={{ color: "#929191" }} />,
                link: "/articles",
              },
              {
                text: "Profile",
                icon: <AccountCircleIcon sx={{ color: "#929191" }} />,
                link: "/profile",
              },
              {
                text: "Log out",
                icon: <LogoutIcon sx={{ color: "#929191" }} />,
                link: "/login",
                // onClick: handleLogoutClick,
              },
            ].map(({ text, icon, link, onClick }) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  onClick={onClick}
                >
                  <ListItemIcon
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <Link to={link}>{icon}</Link>
                  </ListItemIcon>
                  <ListItemText secondary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
}
