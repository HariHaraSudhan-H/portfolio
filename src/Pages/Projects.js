import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { projects } from "../Data/constants";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <Box sx={{ width: "50%", marginX: "auto", marginY: "2%" }}>
      <Typography
        variant="h4"
        sx={{ fontFamily: "inherit", fontWeight: "bold", marginY: "2%" }}
      >
        Projects
      </Typography>
      <Box sx={{ marginX: "auto" }}>
        {projects.map((project) => {
          return (
            <Box sx={{margin:"5%"}}>
              <Typography variant="h6" color="darkgray" fontWeight="600">
                {project.name} {!project.completed?<Typography sx={{display:"inline", background:"green",margin:"5px",padding:"5px",fontSize:"0.75rem",fontWeight:"600",color:"white",fontFamily:"inherit"}}>Ongoing</Typography>:null}
              </Typography>
              <Typography sx={{margin:"2%"}}>{project.description}</Typography>
              <Box>
                <Link href={project.webLink} target="_blank" sx={{margin:"5% 2%"}} underline="none" color={"black"}>
                  <LanguageRoundedIcon />
                </Link>
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
