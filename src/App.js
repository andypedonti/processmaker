import './App.css';
import {Button, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PortfolioItems from './components/pages/PortfolioItems';
import Intrests from './components/pages/Interests';
import Home from "./components/pages/Home";



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       
        
        
      
      </header> */}
      <Router>
      <div>
        <Topbar />
        <Switch>
          <Route path="/portfolio">
            <PortfolioItems />
          </Route>
          <Route path="/intrests">
            <Intrests />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  
</div>
);
}

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
