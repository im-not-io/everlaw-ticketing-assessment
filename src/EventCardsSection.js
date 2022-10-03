import Grid from "@mui/material/Grid";
import { React } from "react";
import EventCard from "./EventCard";
import { locateLargestImage } from "./Utility";

export default function EventCardsSection(props) {
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
