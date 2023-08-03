import { Button, Typography } from "@mui/material";
import React from "react";
import styles from "./topSectionDetails.module.css"

const TopSectionDetails = () => {
  return (
    <div>
      <Typography variant="h5" className={styles.typography1}>
        The best deals on the world's best destinations
      </Typography>
      <br />
      <Typography variant="h1" className={styles.typography2}>
        Best travel and destinations
      </Typography>
      <Typography variant="body1" className={styles.typography3}>
        With travala you can experience new travel and the best tourist
        destinations that we have to offer
      </Typography>
      <br />
      <button variant="contained" className={styles.destinationBtn}>
        Our Destination
      </button>
      <Button variant="text" className={styles.galleryBtn}>
        Our Gallery
      </Button>
      <Button id="Button2">login</Button>
    </div>
  );
};

export default TopSectionDetails;



