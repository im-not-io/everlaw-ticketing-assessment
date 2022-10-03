import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { React, useEffect, useState } from "react";
import EventCardsSection from "./EventCardsSection";
import { getApiData } from "./Utility";

export default function ExplorePage(props) {
  const [eventSections, setEventSections] = useState([]);
  const categories = [{
    "name": "Explore All",
    "query": ["Music", "Miscellaneous", "Sports", "Arts & Theatre", "Film"]
  },
  {
    "name": "Explore Music",
    "query": ["Music"]
  },
  {
    "name": "Explore Sports",
    "query": ["Sports"]
  }
];

  const downloadEventSectionData = async () => {
    const result = [];
    for (const category of categories) {
      const events = await getApiData({
        stateCode: "CA",
        classificationName: category.query,
        sort: "random",
        size: 8,
        onsaleStartDateTime: (new Date()).toISOString().substring(0,19) + "Z"
      });
      result.push({
        name: category.name,
        events: events
      });
    }
    setEventSections(result);
  };

  const renderExploreSection = () => {
    let result = [];
    let index = 0;
    for (const eventSection of eventSections) {
      result.push(
        <Grid container key={index} item xs={12}>
          <Typography variant="h1" component="div" sx={{ ml: 1 }}>
            {eventSection.name}
          </Typography>
          <EventCardsSection events={eventSection.events} />
        </Grid>
      );
      ++index;
    }
    
    return result;
  };

  useEffect(() => {
    downloadEventSectionData(categories);
  }, []);

  useEffect(() => {
    console.log("final event sections");
    console.log(eventSections);
  });
  return (
    <Grid container item spacing={0} xs={12} justifyContent="center">
      <Grid container item xs={11} sx={{ p: 4 }} spacing={4}>
        {renderExploreSection()}
      </Grid>
    </Grid>
  );
}
