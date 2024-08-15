import { BrowserRouter as Router } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

import "./App.css";
import { Box } from "@mui/material";

function App() {
  return (
    <Router>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p:3}}>
          <AllRoutes />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
