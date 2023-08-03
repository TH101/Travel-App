import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Turkey from "../assets/images/Turkey.png";


const SecondSectionDetails = () => {
  return (
    <div
      style={{
        padding: "10px",
        margin:"10%"
      }}
    >
      <Typography
        // variant="h1"
        style={{
          color: "#0C111F",
          fontFamily: "Inter",
          fontSize: "48px",
          lineHeight: "130%",
          letterSpacing: "-3.2px",
          fontWeight: "700",
          width: "90%",
        }}
      >
        Get Experience Which are fun
      </Typography>

      <Typography
        variant="body1"
        style={{
          color: "#0C111F",
          fontFamily: "Inter, sans-serif",
          fontSize: "24px",
          lineHeight: "35px",
          letterSpacing: "-0.96px",
          width: "90%",
        }}
      >
        With travala you can get the best experience on holiday travel, and we
        always update the latest and best destinations in the world
      </Typography>

      <br />
        <Box width={{ xs: "320px", md: "518px" }}>
        <Image
          src={Turkey}
          width={320} // Mobile view width
          height={301}
          alt="turkey"
          style={{
            width: "100%",
            borderRadius: "30px",
            flexShrink: 0,
          }}
        />
      </Box>
    </div>
  );
}

export default SecondSectionDetails
