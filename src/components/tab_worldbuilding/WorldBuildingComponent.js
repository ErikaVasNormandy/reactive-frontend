

import React, { Component } from 'react';
import WorldBuildingContainerComponent from './WorldBuildingContainerComponent'
import MetaTags from 'react-meta-tags';

import { BrowserRouter, Route, Link } from "react-router-dom";

class WorldBuildingComponent extends Component {
  render() {
    return (
      <div>
       <MetaTags>
            <title>Projects</title>
            <meta name="description" content="Projects either ongoing, finished, or planned" />
            <meta property="og:image" content="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-projects/WebPreviewProjects.png" />
          </MetaTags>

      	<h2>World Building</h2>
      	<WorldBuildingContainerComponent/>
      </div>
    );
  }
}

export default WorldBuildingComponent;

