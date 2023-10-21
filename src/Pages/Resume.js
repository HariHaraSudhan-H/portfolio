import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material";

const Resume = () => {
  return (
    <Box sx={{ width: "50%", marginX: "auto", marginY: "2%" }}>
      <Typography
        variant="h4"
        sx={{ fontFamily: "inherit", fontWeight: "bold", marginY: "2%" }}
      >
        Resume
      </Typography>
      <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "60%",
            height: "80%",
            top: "15%",
            left: "20%",
            border: "none",
            borderRadius: "10px",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAFvSuJJEn4/view?embed"
          allowFullScreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
    </Box>
  );
};

export default Resume;
