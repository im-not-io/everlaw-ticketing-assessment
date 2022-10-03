import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClickableLocation from "./ClickableLocation";
import { getApiData, locateLargestImage, prettyFormatDate } from "./Utility";

export default function EventPage(props) {
  const [event, setEvent] = useState();
  const params = useParams();
  useEffect(() => {
    getApiData({ id: params.eventId }).then((result) => {
      setEvent(result[0]);
    });
  }, [params.eventId]);
  useEffect(() => {
    console.log("event");
    console.log(event);
  });
  return (
    <Grid item container xs={12} spacing={4} padding={4}>
      <Grid item container xs={12} md={6}>
        {event ? (
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
              {prettyFormatDate(event.dates.start.localDate)}
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
