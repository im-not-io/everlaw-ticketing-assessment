import './App.css';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Page from "./Page";
import ExplorePage from './ExplorePage';
import { theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Page component={<ExplorePage />} />} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
