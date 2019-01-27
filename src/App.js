import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomeComponent from './components/home/HomeComponent'
import ProjectsComponent from './components/projects/ProjectsComponent'
import ArtworkComponent from './components/artwork/ArtworkComponent'
import WorldBuildingComponent from './components/worldbuilding/WorldBuildingComponent'
import AboutComponent from './components/about/AboutComponent'


import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<div>
      		<ul>
      			<li>
      				<Link to="/">Home</Link>
      			</li>

      			<li>
      				<Link to="/projects">Projects</Link>
      			</li>

      			<li>
       				<Link to="/artwork">Artwork</Link>
      			</li>

      			<li>
       				<Link to="/worldbuilding">WorldBuilding</Link>
      			</li>

      			<li>
       				<Link to="/about">About</Link>
      			</li>


      		</ul>
      		<hr />
      		<Route exact path="/" component={HomeComponent} />
        	<Route exact path="/projects" component={ProjectsComponent} />
        	<Route exact path="/artwork" component={ArtworkComponent} />
        	<Route exact path="/worldbuilding" component={WorldBuildingComponent} />
        	<Route exact path="/about" component={AboutComponent} />

      	</div>
      </BrowserRouter>
    );
  }
}

export default App;
