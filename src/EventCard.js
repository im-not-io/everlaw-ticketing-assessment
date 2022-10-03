import PlaceIcon from "@mui/icons-material/Place";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { React } from "react";
import { prettyFormatDate } from "./Utility";

export default function EventCard(props) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea href={`/events/${props.id}`} sx={{ height: "100%" }}>
        <CardMedia component="img" height="200" alt={props.title} image={props.imageUrl} />
        <CardContent>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="button" color="text.secondary">
            {prettyFormatDate(props.date, props.time)}
          </Typography>
          <Typography variant="button" color="text.secondary">
            <Stack direction="row">
              <PlaceIcon fontSize="small"/>
              {props.location}
            </Stack>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
