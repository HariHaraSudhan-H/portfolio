import { Link, Typography } from "@mui/material";
import React from "react";
import { projects } from "../Data/constants";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from '@mui/material/Box';

const Projects = () => {
  return (
    <Box sx={{ width: {xs:"80%",sm:"70%",md:"50%"}, marginX: "auto", marginY: "2%" }}>
      <Typography
        sx={{ fontFamily: "inherit", fontWeight: "bold", marginY: "2%",fontSize:"1.5rem" }}
      >
        Projects
      </Typography>
      <Box sx={{ marginX: "auto" }}>
        {projects.map((project,index) => {
          return (
            <Box sx={{margin:"5%"}} key={index}>
              <Typography variant="h6" color="darkblue" fontWeight="600">
                {project.name} {!project.completed?<Typography sx={{display:"inline", background:"green",margin:"5px",padding:"5px",fontSize:"0.75rem",fontWeight:"600",color:"white",fontFamily:"inherit"}}>Ongoing</Typography>:null}
              </Typography>
              <Typography sx={{margin:"2%"}}>{project.description}</Typography>
              <Box>
                {project.webLink && <Link href={project.webLink} target="_blank" sx={{margin:"5% 2%"}} underline="none" color={"black"}>
                  <LanguageRoundedIcon />
                </Link>}
                <Link href={project.githubLink} target="_blank" sx={{margin:"5% 2%"}} underline="none" color={"black"}>
                  <GitHubIcon />
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
