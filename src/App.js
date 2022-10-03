import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import EventPage from "./EventPage";
import ExplorePage from "./ExplorePage";
import Page from "./Page";
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
