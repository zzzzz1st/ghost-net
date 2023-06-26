import React from "react";
import "./Hero.css";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import vector from "./images/vector.svg";
import image from "./images/phone-vector.svg";

export default function Hero() {
  const isPhone = useMediaQuery("(max-width:600px)");
  return (
    <Grid container className="hero">
      <Grid item xs={12} md={12} className="container">
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            className="margin-left"
            order={isPhone ? 2 : 1}
          >
            <Box align="center">
              <h1>
                <span>Join us</span> in Keeping Our Environment Clean and Green
              </h1>
              <h2 className="secondary-header">
                Learn how we can improve our environment
              </h2>
              <Button variant="contained">Clean-UP Locations</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={isPhone ? 1 : 2} align="center">
            {isPhone ? (
              <img
                src={image}
                alt="Three animated people cleaning the planet."
              />
            ) : (
              <img
                src={vector}
                alt="Three animated people cleaning the planet."
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
