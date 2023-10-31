import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const sidebarWidth = 240;

// const openedMixin = (theme) => ({
//   width: sidebarWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Sidebar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: sidebarWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    // ...(!open && {
    //   ...openedMixin(theme),
    //   '& .MuiDrawer-paper': openedMixin(theme),
    // }),
    // ...(!open && {
    //   ...closedMixin(theme),
    //   '& .MuiDrawer-paper': closedMixin(theme),
    // }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent">
        <Sidebar
            sx={{
                  minHeight: 60,
                  justifyContent: 'center',
                  px: 2.5,
                }}
        >
            <IconButton
            onClick={handleDrawerOpen}
            sx={{
                    justifyContent: 'center',
                    ...(open),
                }}
          >
            <MenuIcon />
          </IconButton>
            {/* <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
            >
                <MenuIcon />
            </ListItemIcon> */}
        </Sidebar>
        
        <Divider />
        <List>
          {[
            { text: 'Home', icon: <HomeIcon sx={{ color: '#929191' }} />, link: '/home' },
            { text: 'Articles', icon: <ArticleIcon sx={{ color: '#929191' }} />, link: '/articles' },
            { text: 'Profile', icon: <AccountCircleIcon sx={{ color: '#929191' }} />, link: '/profile' },
            { text: 'Log out', icon: <LogoutIcon sx={{ color: '#929191' }} />, link: '/login' },
          ].map(({ text, icon, link }) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }} >
              <ListItemButton
                sx={{
                  // height: 100,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  // my: '50%',
                  px: 2.5,
                }}
                onClick={() => {
                    if (text === "Log out" || location.pathname === link) {
                      setOpen(false);
                    }
                  }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: 'center',
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
  );
}
