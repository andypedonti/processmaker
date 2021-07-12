import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import { BrowserRouter, Router, Route, Switch, Redirect } from "react-router-dom";
import PortfolioItems from './components/pages/PortfolioItems';
import Home from "./components/pages/Home";



function App() {

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Topbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/portfolio" exact component={() => <PortfolioItems />} />
        </Switch>

        
      </BrowserRouter>
    </div>
  

);
}





export default App;
