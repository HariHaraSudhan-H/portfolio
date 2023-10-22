import { Avatar, Box, Link, Typography } from "@mui/material";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Home = () => {
  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", marginY: "10vh" }}>
      <Avatar
        alt="Remy Sharp"
        src="https://lh3.googleusercontent.com/pw/ADCreHfa2V6FmRVZlrFJM4qvwFt7gh6-eZxiE_WTgemGBm6sXgUAArc1KRhyUTLAEfHsyGEeN3ig4oqEwiuIed9bm1jqGSqaCFUL46P2TMvBxPjzzDKbunMc6AjPpczqrhkOm0rI_xRVCV0QkQg-ftDwo7SfCRRDi1qcW6Z4JkfTftbLW-LD_5uRR0OkcNuIa0F9JGONCiyPJVPgdQPzLC0zaJqVrSbeaIsM_JyaNgbG1cILpgQknyenAJFy3UBee6L1arJRnZMGUjmphP357hWFwJaozWeIn-XyA8ZsxSoXFgN9pUgscpokDEQhsz1k6YUb06GjvnVZMbsOdnjaQKrkl0zXt98yM08r7i-uz1Bx52U1aMALp0p5n5rElsCS4iu78mXGhGfNFmZJ4b-zO2CyPs3vJaNYiFuszSWj6CQyTT1_Za2g7YD3x0rjoEkubRCstlJNWS4bykVuxErksMhqb-_5hbioA9O6tfwI5x5e5TzHOBBQUdVAwztuPxviZ4xoU2_CgD5iiKz8oW_RaAOWerZxqx6AywO2fPUm4IM-pNmPDiz0szWRHngENXNjkwxeP9v8IquOVOXZqYQFPhsGVCkW5RueoRZgciGHPIP6zj0IhPPqDsiyggv2b-WA5DjFACSbwGUt6IEeqbxFOflhM-AwZqccexWGtLpjHytyH9fbODwXpSXzTCoK4ez_1GBYMAKH_O62gtvEVJhDfTgalursSI23Y7TVjFMIB34pfZ2Pe-3BXgQQm2floR9ZF9RrXgBEyrl-dd8_U7fs6Wvux9WPhr2kfz0pqq9hl5V9sHoz-Uc3ooYD8NtF7aG_hK6UX29r3-t9nOhVxTkf3FkHmxQPQeBLkrzH6f2pWqm5y_Dazi_Y9at4pC5I-OgGHvHR6Na4A4T1A-eF6BQqXiBi0TFRfOo2cKsgjgjr7OMGXKMjOkiFaMLGH_8XS_EtD9983D16BhJcV8XsTAYXXXUuTuEl9CO9EX97rwc=w612-h612-s-no-gm?authuser=0"
        sx={{ width: {xs:200,md:250}, height: {xs:200,md:250}, marginX: "auto" }}
      />
      <Typography
        sx={{
          fontWeight: "bold",
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
      <Link
        href="https://t.me/hariharasudhan_h"
        target="_blank"
        underline="none"
        color={"black"}
      >
        <TelegramIcon sx={{ margin: "1%" }} />
      </Link>
      <Link
        href=" https://wa.me/9543691902"
        target="_blank"
        underline="none"
        color={"black"}
      >
        <WhatsAppIcon sx={{ margin: "1%" }} />
      </Link>
    </Box>
  );
};

export default Home;
