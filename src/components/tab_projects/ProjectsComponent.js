

import React, { Component } from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";

import ProjectContainerComponent from './ProjectContainerComponent'

import MetaTags from 'react-meta-tags';

class ProjectsComponent extends Component {
  render() {
    return (
      <div>
         <MetaTags>
           <title>Projects</title>
            <meta name="description" content="Projects either ongoing, finished, or planned" />
            <meta property="og:image" content="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-projects/WebPreviewProjects.png" />
         </MetaTags>
      	<h2>Projects Component</h2>
      	
      	<p>Ideas with a 'tentative' plan of action. I'll try linking them to a Git repo with more information and use this page as a general information page. </p>
      <ProjectContainerComponent/></div>
    );
  }
}

export default ProjectsComponent;

