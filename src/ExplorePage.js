import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { React, useEffect, useState } from "react";
import EventCardsSection from "./EventCardsSection";
import { getApiData, formatDateForTicketMasterApi } from "./Utility";

//The ExplorePage executes queries against the RepairShopr API
//and renders them on the page.
export default function ExplorePage(props) {
  const [eventSections, setEventSections] = useState([]);

  useEffect(() => {
    //This is the data used to render different categories on the explore page.
    const categories = [
      {
        name: "Explore All",
        query: ["Music", "Miscellaneous", "Sports", "Arts & Theatre", "Film"],
      },
      {
        name: "Explore Music",
        query: ["Music"],
      },
      {
        name: "Explore Sports",
        query: ["Sports"],
      },
    ];
    const downloadEventSectionData = async () => {
      //Here we choose sensible defaults for the explore page data
      //assuming the user is from California and randomly choosing
      //events from the specified category
      const result = [];
      for (const category of categories) {
        const events = await getApiData({
          stateCode: "CA",
          classificationName: category.query,
          sort: "random",
          size: 8,
          onsaleStartDateTime: formatDateForTicketMasterApi(new Date())
        });
        result.push({
          name: category.name,
          events: events,
        });
      }
      setEventSections(result);
    };
    downloadEventSectionData(categories);
  }, []);

  //Render the category sections on the page.
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

  return (
    <Grid container item spacing={0} xs={12} justifyContent="center">
      <Grid container item xs={11} sx={{ p: 4 }} spacing={4}>
        {renderExploreSection()}
      </Grid>
    </Grid>
  );
}
