import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';



ReactDOM.render(
  <BrowserRouter>
  <Navbar />
  <Switch>
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/contact" component={Contact}></Route>

  </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);



