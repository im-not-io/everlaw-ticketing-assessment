import PlaceIcon from "@mui/icons-material/Place";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import * as React from "react";

const buildAddress = (line1, city, state) => {
  return encodeURIComponent(`${line1}, ${city}, ${state}`);
};

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
