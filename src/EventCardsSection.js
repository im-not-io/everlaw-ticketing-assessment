import { React, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import SearchControls from "./SearchControls";
import EventCard from "./EventCard";

export default function EventCardsSection(props) {

  const locateLargestImage = (images) => {
    let maxWidth = 0;
    let largestWidthImageIndex = 0;
    for (let i = 0; i < images.length; ++i) {
      const image = images[i];
      if (image.width > maxWidth) {
        maxWidth = image.width;
        largestWidthImageIndex = i;
      }
    }
    return images[largestWidthImageIndex].url;
  };

  const renderEventCards = () => {
    let result = [];
    for (const event of props.events) {
      result.push(
        <Grid item key={event.id} container xs={12} md={3} sx={{ p: 1 }}>
          <EventCard id={event.id} title={event.name} date={event.dates.start.localDate} location={`${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].state.stateCode}`} imageUrl={locateLargestImage(event.images)}/>
        </Grid>
      );
    }
    return result;
  };

  return (
    <Grid item container xs={12} justifyContent="flex-start">
      {renderEventCards()}
    </Grid>
  );
}
