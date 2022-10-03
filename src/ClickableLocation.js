import PlaceIcon from "@mui/icons-material/Place";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import * as React from "react";



const buildAddress = (line1, city, state) => {
  //Helper function to URL encode the address to pass
  //it to a Google Maps URL
  return encodeURIComponent(`${line1}, ${city}, ${state}`);
};

//ClickableLocation component renders a link that contains a clickable
//link to Google maps with the address of the event
export default function ClickableLocation(props) {
  const placeLocation = `${props.venue.name} - ${props.venue.city.name}, ${props.venue.state.stateCode}`;
  return (
    <Link
      variant={props.variant}
      style={{textDecoration: "none"}}
      href={`https://www.google.com/maps/search/${buildAddress(
        props.venue.address.line1,
        props.venue.city.name,
        props.venue.state.stateCode
      )}`}
    >
      <Stack direction="row" alignItems="center">
        <PlaceIcon />
        {placeLocation}
      </Stack>
    </Link>
  );
}
