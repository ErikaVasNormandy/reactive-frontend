

import React, { Component } from 'react';
import ContainerComponent from '../BaseContentLoaderComponent/TileComponent'

import { BrowserRouter, Route, Link } from "react-router-dom";

class HomeComponent extends Component {
  render() {
    return (
      <div>
      	<h2>Home</h2>
      	<ContainerComponent/>
      </div>
    );
  }
}

export default HomeComponent;

