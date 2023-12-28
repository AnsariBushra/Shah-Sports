import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { grey } from "@mui/material/colors";

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "gray", color: "white", p: 2 }}>
          <Typography variant="h5" sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}>
            All Rights Reserved &copy; ShahSports
          </Typography>

          <Box sx={{ my:1, 
          "& svg": { fontSize:"35px", cursor:'pointer', mr:2 },
          "& svg:hover": { color:'#333333	'}          
          }}>
           {/* Icons  */}
          <InstagramIcon />
          <FacebookIcon />
          <GitHubIcon />
          <TwitterIcon />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
