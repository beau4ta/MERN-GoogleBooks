import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Search from './components/search/search';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Jumbotron />
    <Route exact path='/' component={Search} />
    </div>
    </Router>
  );
}


export default App;
