"use client"
import { Box, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const TestNavBar = () => {
     const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    console.log("🚀 ~ file: TestNavBar.jsx:13 ~ TestNavBar ~ isMobile:", isMobile)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); 

    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
    return (
      <>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={3}>
            <Box sx={{ marginLeft: "20%" }}>
              <Image src={logo} width={142} height={50} alt="logo" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%", marginLeft: "40%" }}>
              <Tabs
                value=""
                // onChange={handleChange}
                textColor="rgba(255, 255, 255, 0.6)"
                indicatorColor="#FFFFFF"
                aria-label="secondary tabs example"
              >
                <Tab
                  value="one"
                  label=""
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    "&.Mui-selected": {
                      color: "#FFFFFF",
                    },
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />
                <Tab
                  value="two"
                  label="About"
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    "&.Mui-selected": {
                      color: "#FFFFFF",
                    },
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />
                <Tab
                  value="three"
                  label="Destination"
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    "&.Mui-selected": {
                      color: "#FFFFFF",
                    },
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />
                <Tab
                  value="four"
                  label="Contact"
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    "&.Mui-selected": {
                      color: "#FFFFFF",
                    },
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />
              </Tabs>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="text"
              sx={{
                color: "#FFF",
                textTransform: "none",
                margin: "5px",
              }}
            >
              Register{isMobile}
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "121px",
                height: "47px",
                padding: "10px 25px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "100px",
                background: "#FFF",
                color: "#0D0E25",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </>
    );
    
};

export default TestNavBar;
