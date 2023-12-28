import React, { useState } from "react";
import { AppBar, Box, Divider, Grid, IconButton, Stepper, Toolbar, Typography } from "@mui/material";
import SportsBasketballTwoToneIcon from "@mui/icons-material/SportsBasketballTwoTone";
import { Link } from "react-router-dom";
import "../style/NavbarStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

const handleDrawerToggler = () => {
     setOpen(!open)
};

const drawer = (
  <Box onClick={handleDrawerToggler} sx={{textAlign:'center'}}>
      <Typography variant="h5" component="div" sx={{p:1.5}}>
             ShahSports 
            </Typography>
            <Divider/>
                <ul className="mobile-nav" sx={{mt:'12px'}}>
                   <li>
                      <Link to={"/"}>Home</Link>
                   </li><Divider/>
                   <li>
                      <Link to={"/about"}>About</Link>
                   </li><Divider/>
                   <li>
                      <Link to={"/contact"}>Contact</Link>
                   </li><Divider/>
                   <li>
                      <Link to={"/product"}>Product</Link>
                   </li><Divider/>  
                 </ul>
  </Box>
)

  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "white", color: "black" }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2, display:{sm:"none"}} } onClick={handleDrawerToggler}>
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h5" component="div">
             ShahSports 
            </Typography>

            <Box sx={{display:{xs:'none', sm:'block'}} }>
                <ul className="navigation">
                          <li>
                            <Link to={"/"}>Home</Link>
                          </li>
                          <li>
                            <Link to={"/about"}>About</Link>
                          </li>
                          <li>
                            <Link to={"/contact"}>Contact</Link>
                          </li>
                          <li>
                            <Link to={"/product"}>Product</Link>
                          </li>
                 </ul>
                    </Box>
            </Toolbar>  
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={open} onClose={handleDrawerToggler} sx={{display:{xs:'block', sm:'none'}, "&. MuiDrawer-paper":{boxSizing:'border-box', width:'240px'}}}>
            {drawer}
          </Drawer>
        </Box>
        </Box>
          <Box sx={{p: 2}}><Toolbar /></Box>
    </div>
  );
};



 {/* Search Bar */}



 {/* 
 
  <Box sx={{ display: 'flex' }}>
            <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggler} sx={{mr:2}}>
              <MenuIcon />
            </IconButton>
            </Box>
 
 <Box className="search" flexGrow={3}>
               <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                   </SearchIconWrapper>
               </Search>
          </Box>

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

            <Drawer variant="temporary" sx={{ flexShrink: 0, '& .MuiDrawer-paper': {width: '230px',
                         boxSizing: 'border-box', },}} anchor="left" open={open} onClose={()=> setOpen(false)}>

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
                  </Box>
          </Drawer>
*/}

export default Navbar;
