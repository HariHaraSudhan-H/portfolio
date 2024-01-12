import { AppBar, Toolbar } from "@mui/material";
import React, { useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { navbarItems } from "../Data/constants";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [value, setValue] = useState("home");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar
        sx={{
          background: "linear-gradient(127deg, darkgray, white);",
          justifyContent: "center",
          alignItems: "center",
          marginX: "5",
          zIndex: "5",
        }}
        position="fixed"
      >
        <Toolbar sx={{ color: "black" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="none"
            aria-label="secondary tabs example"
          >
            <Link to="/" underline="none">
              <Tab
                value={value}
                label={<HomeRoundedIcon />}
                sx={{
                  width: "auto",
                  minWidth: 50,
                  fontWeight: "bold",
                  fontFamily: "inherit",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  color: "black",
                  padding: "0",
                }}
              />
            </Link>

            {navbarItems.map((item, index) => {
              return (
                <Link to={`/${item}`} underline="none">
                  <Tab
                    value={item}
                    label={item}
                    sx={{
                      width: "auto",
                      minWidth: 70,
                      fontWeight: "bold",
                      fontFamily: "inherit",
                      textTransform: "capitalize",
                      fontSize: { xs: "0.75rem", sm: "1rem" },
                      color: "black",
                      padding: { xs: "0.1rem", sm: "1rem" },
                    }}
                    key={index}
                  />
                </Link>
              );
            })}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
export default Navbar;
