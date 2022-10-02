import { React, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import EventCardsSection from "./EventCardsSection";
import { getApiData } from "./DataFetcher";

export default function ExplorePage(props) {
  
  const [exploreEvents, setExploreEvents] = useState([]);
 
  useEffect(() => {
    getApiData({stateCode: "CA", startDate: "2022-10-31", classificationName: ["Music", "Miscellaneous", "Sports", "Arts & Theatre", "Film"], sort: "random"}).then((result) => {
      setExploreEvents(result);
    });
  }, []);

  return (
    <Grid container item spacing={0} xs={12} justifyContent="center">
      <Grid container item xs={11} sx={{ p: 4 }}>
        <Grid container item xs={12}>
          <Typography variant="h1" component="div" sx={{ ml: 1 }}>
            Explore events
          </Typography>
          <EventCardsSection events={exploreEvents}/>
        </Grid>
      </Grid>
    </Grid>
  );
}
