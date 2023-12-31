import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import turkey from "../assets/images/turkey.png";

const DestinationCardDetails = () => {
  return (
    <Card
      sx={{
        // backgroundColor: "#0C111F",
        marginLeft: "10%",
        maxWidth: 345,
      }}
    >
      <CardContent sx={{}}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        {/* <CardMedia
          sx={{ width: 320, height: 301 }}
          image={turkey}
          title="test"
        /> */}
        <div style={{ width: 320, height: 301 }}>
          <Image src={turkey} alt="test" width={320} height={301} />
        </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default DestinationCardDetails;
