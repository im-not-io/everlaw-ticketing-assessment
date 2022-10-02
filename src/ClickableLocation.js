import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from '@mui/material/Link';
import PlaceIcon from '@mui/icons-material/Place';


export default function ClickableLocation(props) {
  return (
    <Button startIcon={<PlaceIcon />}>{props.location}</Button>
  );
}
