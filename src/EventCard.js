import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ClickableLocation from "./ClickableLocation";

export default function EventCardsSection(props) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.imageUrl}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.date}
          </Typography>
          <ClickableLocation location={props.location}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
