import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes";
import {NavBar} from "./components/NavBar";
import './App.css'

function App() {

    const routes = useRoutes();

  return (
      <BrowserRouter>
          {<NavBar />}
          <div className="container">
              {routes}
          </div>
      </BrowserRouter>
  );
}

export default App;
