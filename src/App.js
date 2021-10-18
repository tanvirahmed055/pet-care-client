import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/services/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
