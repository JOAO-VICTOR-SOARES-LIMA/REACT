import { List } from "@mui/material";

import ResponsiveDrawer from "./components/Sidebar";
import {Outlet} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ResponsiveDrawer/>
      <Outlet />
      
    </div>
  );
}

export default App;
