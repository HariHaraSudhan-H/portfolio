import { Link, Typography } from "@mui/material";
import React from "react";
import { certificates, projects } from "../Data/constants";
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';

const Certificates = () => {
  return (
    <Box sx={{ width: {xs:"80%",sm:"70%",md:"50%"}, marginX: "auto", marginY: "4%" }}>
      <Typography
        sx={{ fontFamily: "inherit", fontWeight: "bold", marginY: "2%",fontSize:"1.5rem" }}
      >
        Certifications
      </Typography>
      <Box sx={{ marginX: "auto" }}>
        {certificates.map((certificate) => {
          return (
            <Box sx={{margin:"5%"}}>
              <Typography color="darkblue" fontWeight="600">
                {certificate.name}
              </Typography>
              <Typography sx={{margin:"2%"}}>{certificate.description}</Typography>
              <Box>
                <Link href={certificate.certificateLink} target="_blank" sx={{margin:"5% 2%"}} underline="none" color={"black"}>
                  <ArticleIcon />
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Certificates;
