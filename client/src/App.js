import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from 'react-router-dom';
import background from './assets/booksbg.jpeg';
import Search from './pages/Search';

const App = () => {
  return(
    <Router>
      <div  className='background' style={{ backgroundImage: `url(${background})`}}>
        <Route exact path='/' component={Search} />
        {/* <Route exact path='/saved' component={Saved} /> */}
      </div>
    </Router>
 )
}

export default App;
