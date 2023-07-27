import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";
import NavBar from "@/components/NavBar";
import Grid from "@mui/material/Grid";
import mainImage from "../assets/images/mainImage.png";
import TopSectionDetails from "@/components/TopSectionDetails";
import TestNavBar from "@/components/TestNavBar";

const HomeScreen = () => {
  return (
    <Box>
      {/* Top Section with Black Background */}
      <Box
        sx={{
          backgroundColor: "#0C111F",
          color: "white",
          padding: "40px 0",
          height: "16.6%",
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
                      <NavBar />
                      {/* <TestNavBar /> */}
          </Grid>
          {/* <Grid item xs={4}>
            <h1>2</h1>
          </Grid>
          <Grid item xs={4}>
            <h1>3</h1>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Box sx={{ margin: "20%", width: "80%" }}>
              <TopSectionDetails />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginLeft: "20%" }}>
              <img
                src="https://res.cloudinary.com/de9zkpp0w/image/upload/v1690446713/thilini/Group_48095510_odtoo3.png"
                width={"617.758px"}
                height={"616.951px"}
                alt="main Image"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Section 2 */}
      <Box sx={{ backgroundColor: "white", color: "black", padding: "40px 0" }}>
        <Container>
          <Typography variant="h1">Section 2</Typography>
          {/* Add content for section 2 here */}
        </Container>
      </Box>

      {/* Section 3 */}
      <Box
        sx={{ backgroundColor: "lightgray", color: "black", padding: "40px 0" }}
      >
        <Container>
          <Typography variant="h1">Section 3</Typography>
          {/* Add content for section 3 here */}
        </Container>
      </Box>

      {/* Section 4 */}
      <Box sx={{ backgroundColor: "white", color: "black", padding: "40px 0" }}>
        <Container>
          <Typography variant="h1">Section 4</Typography>
          {/* Add content for section 4 here */}
        </Container>
      </Box>

      {/* Section 5 */}
      <Box
        sx={{ backgroundColor: "lightgray", color: "black", padding: "40px 0" }}
      >
        <Container>
          <Typography variant="h1">Section 5</Typography>
          {/* Add content for section 5 here */}
        </Container>
      </Box>

      {/* Section 6 */}
      <Box sx={{ backgroundColor: "white", color: "black", padding: "40px 0" }}>
        <Container>
          <Typography variant="h1">Section 6</Typography>
          {/* Add content for section 6 here */}
        </Container>
      </Box>
    </Box>
  );
};

export default HomeScreen;
