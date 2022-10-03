import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import EventPage from "./EventPage";
import ExplorePage from "./ExplorePage";
import Page from "./Page";
import { theme } from "./Theme";

function App() {
  return (
    //This wraps the app in a ThemeProvider to allow us to override
    //the theme styles in Material UI.
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Page component={<ExplorePage />} />} />
        <Route path="/events">
          <Route path=":eventId" element={<Page component={<EventPage />} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
