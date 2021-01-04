


import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Introduccion from "./pages/introduccion";
import Home from "./pages/home.jsx";
import AboutMe from './pages/aboutMe';
import ContactMe from './pages/contact';
import Projects from './pages/proyectos';



function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Introduccion} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contactMe" component={ContactMe} />
        </Switch>
    </Router>
  );
}

export default App;