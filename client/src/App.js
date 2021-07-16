import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from 'react-router-dom';
import background from './assets/booksbg.jpeg';
import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Search from './components/search/search';


function App() {
  return (
    <Router>
    <div className="App">
      <div className='background' style={{ backgroundImage: `url(${background})`}}>
     <Navbar />
     <Jumbotron />
    <Route exact path='/' component={Search} />
    </div>
    </div>
    </Router>
  );
}


export default App;
