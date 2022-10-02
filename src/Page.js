import React from "react";
import NavBar from "./NavBar";
import Stack from '@mui/material/Stack';

export default function Page(props) {
  return (
    <Stack spacing={0}>
      <NavBar />
      {props.component}
    </Stack>
  );
}
