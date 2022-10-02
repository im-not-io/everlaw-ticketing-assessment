import { React, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import SearchControls from "./SearchControls";
import EventCard from "./EventCard";

export default function EventCardsSection(props) {
  const [cards, setCards] = useState([
    {
      title: "Title",
      date: "October 12, 2022",
      location: "1234 Road Oakland, CA",
      imageUrl: "https://picsum.photos/id/101/300/200",
    },
    {
      title: "Card two",
      date: "September 7, 2022",
      location: "10 Main Street, Oakland, CA",
      imageUrl: "https://picsum.photos/id/10/300/200",
    },
    {
      title: "Card four",
      date: "September 8, 2022",
      location: "3 West Street, Oakland, CA",
      imageUrl: "https://picsum.photos/id/34/300/200",
    },
    {
      title: "Card three",
      date: "September 9, 2022",
      location: "88 North Street, Oakland, CA",
      imageUrl: "https://picsum.photos/id/59/300/200",
    }
  ]);

  const renderEventCards = () => {
    let result = [];
    for (const card of cards) {
      result.push(
        <Grid item container xs={12} md={3} sx={{ p: 1 }}>
          <EventCard title={card.title} date={card.date} location={card.location} imageUrl={card.imageUrl}/>
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
