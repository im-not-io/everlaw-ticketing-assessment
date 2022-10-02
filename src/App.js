import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Page from "./Page";
import ExplorePage from "./ExplorePage";
import EventPage from "./EventPage";
import { theme } from "./Theme";

function App() {
  return (
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
