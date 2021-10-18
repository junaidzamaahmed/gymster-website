import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Plans from './components/Plans/Plans';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/plans">
            <Plans></Plans>
          </Route>
          <Route path="/service/:title">
            <ServiceDetails></ServiceDetails>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
