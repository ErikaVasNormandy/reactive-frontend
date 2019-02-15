import React, { Component } from 'react';

import NavBarComponent from './components/NavBar/NavBarComponent'

import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className = "rootElement">
         <NavBarComponent/>

      </div>
    );
  }
}

export default App;
