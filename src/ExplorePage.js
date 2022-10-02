import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import EventCardsSection from "./EventCardsSection";

export default function ExplorePage(props) {
  return (
    <Grid container item spacing={0} xs={12} justifyContent="center">
      <Grid container item xs={11} sx={{ p: 4 }}>
        <Grid container item xs={12} >
          <Typography variant="h1" component="div" sx={{ ml: 1 }}>
            Explore events
          </Typography>
          <EventCardsSection />
        </Grid>
      </Grid>
    </Grid>
  );
}
