import React, { useState } from "react";
import { AppBar, Box, Divider, Grid, IconButton, Stepper, Toolbar, Typography } from "@mui/material";
import SportsBasketballTwoToneIcon from "@mui/icons-material/SportsBasketballTwoTone";
import { Link } from "react-router-dom";
import "../style/NavbarStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from '@mui/material/Drawer';
import Search from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import StyledInputBase from '@mui/icons-material/Search';
import SearchIconWrapper from '@mui/icons-material/Search';
import { grey } from "@mui/material/colors";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Navbar = () => {
  const [open, setOpen] = React.useState(false);

const handleDrawerToggler = () => {
     if(setOpen =='false'){
      setOpen('true');
     }
     else{
      setOpen('false');
     }
};

const style = {
  display: 'flex',
  flexdirection: 'column',
  textalign: 'center',

}

  return (
    <div>
      <Box flexGrow={1}>
        <AppBar component={"nav"} sx={{ bgcolor: "white", color: "black" }}>
          <Toolbar>
            {/* Icon */}
            <Box sx={{ display: 'flex' }}>
            <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggler} sx={{mr:2}}>
              <MenuIcon />
            </IconButton>
            </Box>

            {/* Logo and name */}
            <Box>
            <Typography variant="h5" component="div">
              <SportsBasketballTwoToneIcon variant="h5" />
              ShahSports
            </Typography>
            </Box>

            {/* Search Bar */}
            <Box className="search" flexGrow={3}>
               <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                   </SearchIconWrapper>
               </Search>
          </Box>

            {/* Options */}
            <Box  variant="h5" flexGrow={1}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/signup"}>Sign Up</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
          
        </AppBar>

         <Drawer variant="temporary" sx={{ flexShrink: 0, '& .MuiDrawer-paper': {width: '230px',
                         boxSizing: 'border-box', },}} anchor="left" open={open} onClose={()=> setOpen(false)}>
                      {/* {drawer} */}

               <Box className='nav'>             
                    <IconButton aria-label="open drawer" edge="start" onClick={()=> setOpen(false)} sx={{mr:2}}>
                          <MenuIcon />
                    </IconButton>

                        <Box sx={{style}}>
                        <Typography variant="h5" component="div">
                          <SportsBasketballTwoToneIcon variant="h5" />
                          ShahSports
                        </Typography>
                        </Box>
                    <Divider></Divider>

                    <Box sx={{mt:'12px'}}>
                        <ul>
                          <li>
                            <Link to={"/"}>Home</Link>
                          </li>
                          <Divider></Divider>
                          <li>
                            <Link to={"/about"}>About</Link>
                          </li>
                          <Divider></Divider>
                          <li>
                            <Link to={"/contact"}>Contact</Link>
                          </li>
                        </ul>
                    </Box>
                  </Box>
        </Drawer>
        </Box>
          <Box sx={{p: 1}}><Toolbar /></Box>
    </div>
  );
};

export default Navbar;
