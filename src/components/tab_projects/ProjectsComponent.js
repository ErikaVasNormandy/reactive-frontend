

import React, { Component } from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";

import ProjectContainerComponent from './ProjectContainerComponent'

class ProjectsComponent extends Component {
  render() {
    return (
      <div>
      	<h2>Projects Component</h2>
      	
      	<p>Ideas with a 'tentative' plan of action. I'll try linking them to a Git repo with more information and use this page as a general information page. </p>
      	<ProjectContainerComponent/>
      </div>
    );
  }
}

export default ProjectsComponent;

