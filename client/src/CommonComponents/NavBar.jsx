import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthProvider';
import LogoutButton from './LogoutButton';
import { styled, useTheme } from '@mui/material/styles';
import UpdateProfileModal from './UpdateProfilePicModal.jsx';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
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
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';



const drawerWidth = 350;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function NavBar() {
  const { user } = useContext(AuthContext)
  const navigate= useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 4, ...(open && { display: 'none' }) }}
          >
            <MenuIcon style={{height:'30px', width:'30px'}}/>
          </IconButton>
          <Typography variant="h3" noWrap component="div"style={{paddingBottom:'10px', fontSize:"37px"}}>
            {user.avatar_url ? <img src={user.avatar_url} alt="profile pic" style={{ height:'55px', width:'55px', marginRight:'20px', marginTop:'10px', marginBottom:'-10px', borderRadius:'50%'}}/> : <img src="./emptyProfilePic.png" alt="profile pic" style={{height:'55px', marginRight:'20px', marginTop:'10px', marginBottom:'-10px'}}/> }
            Welcome {user.username}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{height:'74px'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{height:'30px', width:'30px'}}/> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem key="Home" disablePadding >
              <ListItemButton onClick={() => navigate("/home")}>
                <ListItemIcon>
                  <HomeIcon /> 
                </ListItemIcon >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem key="My Events" disablePadding >
              <ListItemButton onClick={() => navigate("/myEvents")}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon >
                <ListItemText primary="My Events" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Create New Event" disablePadding >
              <ListItemButton onClick={() => navigate("/createNewEvent")}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon >
                <ListItemText primary="Create New Event" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Chat" disablePadding >
              <ListItemButton onClick={() => navigate("/chat")}>
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon >
                <ListItemText primary="Event Chat" />
              </ListItemButton>
            </ListItem>
            <UpdateProfileModal />
          <LogoutButton/>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}

export default NavBar
