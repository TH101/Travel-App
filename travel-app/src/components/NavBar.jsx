"use client"
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import logo from "../assets/images/logo.png";
//import styles from "../assets/styles/styles.css"

const pages = ["Home", "About", "Destination", "Contact"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
     const [anchorElNav, setAnchorElNav] = React.useState(null);
    //  const [anchorElUser, setAnchorElUser] = React.useState(null);
    
     const handleOpenNavMenu = (event) => {
       setAnchorElNav(event.currentTarget);
  };
  
      const handleCloseNavMenu = () => {
      setAnchorElNav(null);
  };
    //  const handleOpenUserMenu = (event) => {
    //    setAnchorElUser(event.currentTarget);
    //  };

     

    //  const handleCloseUserMenu = () => {
    //    setAnchorElUser(null);
    //  };

   
    return (
      <>
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: "#0C111F" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  // marginLeft: "2%",
                  display: { xs: "none", md: "flex" },
                  mr: 10,
                  marginLeft: "70px",
                }}
              >
                <Image src={logo} width={142} height={50} alt="logo" />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  // aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  marginLeft: { sm: "6%", md: "20%" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: "16px",
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 10,
                  // marginLeft: "50px",
                }}
              >
                <Image src={logo} width={142} height={50} alt="logo" />
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "flex" },
                  mr: 10,
                  // marginLeft: "50px",
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    color: "#FFF",
                    textTransform: "none",
                    margin: "5px",
                    fontSize: "16px",
                  }}
                >
                  Register
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
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginRight: "70px",
                  }}
                >
                  Login
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </>
    );
    
};

export default NavBar;
