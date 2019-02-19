

import React, { Component } from 'react';
import WorldBuildingContainerComponent from './WorldBuildingContainerComponent'
import MetaTags from 'react-meta-tags';

import { BrowserRouter, Route, Link } from "react-router-dom";

class WorldBuildingComponent extends Component {
  render() {
    return (
      <div>


      	<h2>World Building</h2>
      	<WorldBuildingContainerComponent/>
      </div>
    );
  }
}

export default WorldBuildingComponent;

