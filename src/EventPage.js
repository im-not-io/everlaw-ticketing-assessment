import { React, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import EventCardsSection from "./EventCardsSection";
import { getApiData } from "./DataFetcher";
import { Route, Link, Routes, useParams, useLocation } from "react-router-dom";

export default function EventPage(props) {
  const [event, setEvent] = useState();
  const params = useParams();
  useEffect(() => {
    getApiData({ id: params.eventId }).then((result) => {
      setEvent(result[0]);
    });
  }, [params.eventId]);
  console.log("params in event", params);
  return (
    <Typography variant="h1" component="div">
      {event ? event.name : null}
    </Typography>
  );
}
