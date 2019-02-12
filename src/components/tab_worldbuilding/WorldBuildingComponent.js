

import React, { Component } from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";

import WorldBuildingContainerComponent from './WorldBuildingContainerComponent'

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

