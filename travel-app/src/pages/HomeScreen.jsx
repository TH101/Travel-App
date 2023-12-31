import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import mainImage from "../assets/images/mainImage.png";
import TopSectionDetails from "@/components/TopSectionDetails";
import NavBar from "@/components/NavBar";
import SecondSection from "@/components/SecondSection";
import SecondSectionDetails from "@/components/SecondSectionDetails";
import DestinationCard from "@/components/DestinationCard";
import DestinationCardDetails from "@/components/DestinationCardDetails";

const HomeScreen = () => {
  return (
    <Box>
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
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ margin: "20%", width: "80%" }}>
              <TopSectionDetails />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
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
      <Box sx={{ backgroundColor: "white", padding: "40px 0" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            {/* <DestinationCard /> */}
            <SecondSectionDetails />
          </Grid>
          <Grid item xs={12} md={6}>
            <DestinationCardDetails />
          </Grid>
          <Grid item xs={12}>
            <SecondSection />
          </Grid>
        </Grid>
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
