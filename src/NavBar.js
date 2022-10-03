import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" color="secondary" variant="h6" sx={{ flexGrow: 1, textDecoration: "none" }}>
            Let's Do Something
          </Link>

          <Button variant="contained" href="/" color="secondary">Explore</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
