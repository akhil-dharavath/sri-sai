import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="second-footer">
        <div className="content">
          <p>Copyright © 2024 Sri Sai Engineering & Techincal Services.</p>
          <p>Powered by Sri Sai Engineering & Techincal Services.</p>
        </div>
        <div className="icons">
          <IconButton
            sx={{ "&:hover": { color: "#316FF6", background: "white" } }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{ "&:hover": { color: "#CD201F", background: "white" } }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            sx={{ "&:hover": { color: "#1DA1F2", background: "white" } }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{ "&:hover": { color: "#cd486b", background: "white" } }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            sx={{ "&:hover": { color: "#3b60c4", background: "white" } }}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            sx={{ "&:hover": { color: "#34A853", background: "white" } }}
          >
            <GoogleIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
