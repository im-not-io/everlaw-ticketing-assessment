import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";

export default function EventCard(props) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea href={`/events/${props.id}`} sx={{ height: "100%" }}>
        <CardMedia component="img" height="200" image={props.imageUrl} />
        <CardContent>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="button" color="text.secondary">
            {new Date(props.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})}
          </Typography>
          <Typography variant="button" color="text.secondary">
            <Stack direction="row">
              <PlaceIcon />
              {props.location}
            </Stack>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
