import { AppBar, Toolbar } from "@mui/material";
import React, { useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { navbarItems } from "../Data/constants";

const Navbar = (props) => {
  const [value, setValue] = useState("home");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar
        sx={{
          background: "linear-gradient(120deg,darkgray,white)",
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
            <Tab
              value={value}
              label={<HomeRoundedIcon />}
              href="/"
              sx={{
                width: "auto",
                minWidth: 50,
                fontWeight: "bold",
                fontFamily: "inherit",
                textTransform: "capitalize",
                fontSize: "1rem",
                color: "inherit",
                padding: "0",
              }}
            />
            {navbarItems.map((item, index) => {
              return (
                <Tab
                  value={item}
                  label={item}
                  href={`/${item}`}
                  sx={{
                    width: "auto",
                    minWidth: 70,
                    fontWeight: "bold",
                    fontFamily: "inherit",
                    textTransform: "capitalize",
                    fontSize: { xs: "0.75rem", sm: "1rem" },
                    color: "inherit",
                    padding: { xs: "0.1rem", sm: "1rem" },
                  }}
                  key={index}
                />
              );
            })}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

{
}
export default Navbar;
