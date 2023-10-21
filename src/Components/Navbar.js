import { AppBar, Box, Grid, Toolbar, Typography, capitalize } from "@mui/material";
import React, { useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "@mui/material/Link";
import Home from "../Pages/Home";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { navbarItems } from "../Data/constants";

const Navbar = (props) => {
  //   const [value, setValue] = useState("home");
  const { value, setValue } = props;
  const { page } = useParams();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(page);
  };
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  return (
    <>
      <AppBar
        sx={{
          background: "#E5E5E5",
          justifyContent: "center",
          alignItems: "center",
          marginX: "5",
        }}
        position="fixed"
      >
        <Toolbar sx={{ color: "black" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="none"
            aria-label="secondary tabs example"
          >
            <Tab value="home" label="Home" href="/" sx={{fontWeight:"bold",fontFamily:"inherit",textTransform:"capitalize"}}/>
            {navbarItems.map((item)=>{
                return <Tab value={item} label={item} href={`/${item}`} sx={{fontWeight:"bold",fontFamily:"inherit",textTransform:"capitalize"}}/>
            })}
            {/* <Tab value="about" label="about" href="/about" />
            <Tab value="projects" label="projects" href="/projects" />
            <Tab
              value="certificates"
              label="certificates"
              href="/certificates"
            />
            <Tab value="resume" label="resume" href="/resume"/> */}
          </Tabs>
          {page}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

{
}
export default Navbar;
