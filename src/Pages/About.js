import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{width:"50%",marginX:"auto",marginY:"2%"}}>
      <Typography
        variant="h4"
        sx={{ fontFamily: "inherit", fontWeight: "bold",marginY:"2%"}}
      >
        About
      </Typography>
      <Box sx={{marginX:"auto"}}>
        <Typography sx={{fontSize: "1rem",fontFamily:"inherit",color:"black",fontWeight:"500",marginBottom:"20px",textAlign:"justify"}}>
          I am a Frontend Developer who has passion for creating cool and
          awesome websites and mobile sites. I love working with HTML5, CSS,
          JavaScript and mostly ReactJS. Also I have basic knowledge about
          MangoDB, Firebase, and NodeJS. I have a little hands on Java and basic
          knowledge on DS & Algorithms.
        </Typography>
        <Typography sx={{fontSize: "1rem",fontFamily:"inherit",color:"black",fontWeight:"500",marginBottom:"20px",textAlign:"justify"}}>
          I am working currently working with Tata Technologies as Design
          Engineer, Cockpit Plastic Trims after completing my Bachelors of
          Mechanical Engineering. I manage release activities using Siemens
          TeamCenter Unified Architecture (TCUA) for an upcoming project. I also
          use Simsolid software for COC level initial level simulations for
          vibration analysis.
        </Typography>
        <Typography sx={{fontSize: "1rem",fontFamily:"inherit",color:"black",fontWeight:"500",marginBottom:"20px",textAlign:"justify"}}>
          Even though being a mechanical Engineer I always loved to know more
          about Web Developments and its new trends. So I decided and start
          learning these technologies.
        </Typography>
        <Typography sx={{fontSize: "1rem",fontFamily:"inherit",color:"black",fontWeight:"500",marginBottom:"20px",textAlign:"justify"}}>
          So, now I am planning to look for opportunities towards my interest. I
          am looking for frontend web developer roles to exhibit talents and
          ideas.
        </Typography>
        <Typography sx={{fontSize: "1rem",fontFamily:"inherit",color:"black",fontWeight:"500"}}>
            For more queries please mail me on hari.sudhan612@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
