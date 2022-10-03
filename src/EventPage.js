import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClickableLocation from "./ClickableLocation";
import { getApiData, locateLargestImage, prettyFormatDate } from "./Utility";

//EventPage is responsible for fetching data from the
//TicketMaster API and rendering a single evne on the page.
export default function EventPage(props) {
  const [event, setEvent] = useState();
  const params = useParams();
  useEffect(() => {
    //useEffect hook is only called once when the eventId changes
    //to load data from the API and populate it into the state
    getApiData({ id: params.eventId }).then((result) => {
      setEvent(result[0]);
    });
  }, [params.eventId]);
  return (
    <Grid item container xs={12} spacing={4} padding={4}>
      <Grid item container xs={12} md={6}>
        {event ? (
          //locateLargestImage is a helper function to prevent
          //showing the user a blurry image
          <img
            src={locateLargestImage(event.images)}
            style={{ maxWidth: "100%", objectFit: "cover" }}
            alt={event.name}
          />
        ) : null}
      </Grid>
      <Grid item container xs={12} md={6}>
        {event ? (
          <Stack style={{width: "100%"}}>
            <Typography variant="h1" component="div">
              {event.name}
            </Typography>
            <Typography variant="h6" component="div">
              {prettyFormatDate(event.dates.start.localDate, event.dates.start.localTime)}
            </Typography>
            <ClickableLocation variant="button" venue={event._embedded.venues[0]} />
            <Button
              fullWidth
              sx={{ mb: 2, mt: 2 }}
              variant="contained"
              href={event.url}
            >
              Register
            </Button>
            {event.info ? (
              <React.Fragment>
                <Typography variant="h5" component="div">
                  Additional Information:
                </Typography>
                <Typography component="div">{event.info}</Typography>
              </React.Fragment>
            ) : null}
          </Stack>
        ) : null}
      </Grid>
    </Grid>
  );
}
