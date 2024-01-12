import { Avatar, Box, Link, Typography } from "@mui/material";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import profilePhoto from "../Data/profile-pic.png"
const Home = () => {
  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", marginY: "10vh" }}>
      <Avatar
        alt="Remy Sharp"
        src={profilePhoto}
        sx={{ width: {xs:200,md:250}, height: {xs:200,md:250}, marginX: "auto" }}
      />
      <Typography
        sx={{
          fontSize: {xs:"1.75rem",md:"2rem"},
          marginY: 1,
          fontFamily: "inherit",
          fontWeight: "800",
        }}
      >
        HariHaraSudhan
      </Typography>
      <Typography sx={{ fontWeight: "bold", fontFamily: "inherit" }}>
        Frontend Web Developer
      </Typography>
      <Typography>Design Engineer | Tata Technologies | Pune</Typography>
      <Link
        href="https://github.com/HariHaraSudhan-H"
        target="_blank"
        underline="none"
        color={"black"}
      >
        <GitHubIcon sx={{ margin: "1%" }} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/hariharasudhan-h-a28677193/"
        target="_blank"
        underline="none"
        color={"black"}
      >
        <LinkedInIcon sx={{ margin: "1%" }} />
      </Link>
      <Link
        href="mailto:hari.sudhan612@gmail.com"
        target="_blank"
        underline="none"
        color={"black"}
      >
        <MailRoundedIcon sx={{ margin: "1%" }} />
      </Link>
      {/* <Link
        href="https://t.me/hariharasudhan_h"
        target="_blank"
        underline="none"
        color={"black"}
      >
        <TelegramIcon sx={{ margin: "1%" }} />
      </Link> */}
      {/* <Link
        href=" https://wa.me/9543691902"
        target="_blank"
        underline="none"
        color={"black"}
      >
        <WhatsAppIcon sx={{ margin: "1%" }} />
      </Link> */}
    </Box>
  );
};

export default Home;
