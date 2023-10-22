import { Typography } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import "../Styles/resume.css"
const Resume = () => {
  return (
    <Box sx={{ width:{xs:"80%",sm:"70%",md:"50%"}, marginX: "auto", marginY: "2%" }}>
      <Typography
        variant="h4"
        sx={{ fontFamily: "inherit", fontWeight: "bold",marginY:"2%",fontSize:"1.5rem"}}
      >
        Resume
      </Typography>
      <iframe
          loading="eager"
          src="https://www.canva.com/design/DAFvSuJJEn4/view?embed"
          allowFullScreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
    </Box>
  );
};

export default Resume;

// width: {xs:"80%",sm:"70%",md:"50%"} ,