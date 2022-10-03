import React from "react";
import NavBar from "./NavBar";
import Stack from '@mui/material/Stack';

//Renders a page and makes is easy to apply
//changes on every page of the site.
export default function Page(props) {
  return (
    <Stack spacing={0}>
      <NavBar />
      {props.component}
    </Stack>
  );
}
