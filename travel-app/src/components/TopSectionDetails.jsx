import { Button } from '@mui/material';
import React from 'react'

const TopSectionDetails = () => {
  return (
    <div>
      <span
        style={{
          color: "#E97458",
          fontFamily: "Inter",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          textTransform: "uppercase",
        }}
      >
        The best deals on the world's best destinations
      </span>
      <br />
      <span
        style={{
          color: "#FFF",
          fontFamily: "Volkhov",
          fontSize: "80px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "100px",
          letterSpacing: "-3.2px",
        }}
      >
        Best travel and destinations
      </span>
      <p
        style={{
          color: "rgba(255, 255, 255, 0.70)",
          fontFamily: "Inter, sans-serif",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "35px",
          letterSpacing: "-0.96px",
          width: "516px",
        }}
      >
        With travala you can experience new travel and the best tourist
        destinations that we have to offer
      </p>
        <br />
      <Button
        variant="contained"
        style={{
          display: "inline-flex",
          padding: "16px 24px",
          justifyContent: "center",
          alignItems: "center",
          gap: "14px",
          borderRadius: "100px",
          textTransform: "none",
          fontWeight: "bold",
          color: "#0C111F",
          background:
            "var(--l-2, linear-gradient(135deg, #F9EC7D 0%, #F5B100 100%))",
        }}
      >
        Our Destination
      </Button>
      <Button
        variant="text"
        sx={{
          color: "#FFF",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "180%",
          letterSpacing: "0.36px",
          margin: "5px",
          textTransform: "none",
        }}
      >
        Our Gallery
      </Button>
    </div>
  );
}

export default TopSectionDetails
