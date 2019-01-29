import React, { Component } from 'react';
import {styles} from './navbar.css';

import HomeComponent from '../home/HomeComponent'
import ProjectsComponent from '../projects/ProjectsComponent'
import ArtworkComponent from '../artwork/ArtworkComponent'
import WorldBuildingComponent from '../worldbuilding/WorldBuildingComponent'
import AboutComponent from '../about/AboutComponent'

import WindowComponent from '../WindowComponent/WindowComponent'
import BusinessCardComponent from '../BusinessCardComponent/BusinessCardComponent'

import { BrowserRouter, Route, Link } from "react-router-dom";

class NavBarComponent extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
      	<div className ="navBar">
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
       				<Link to="/worldbuilding">World Building</Link>
      			</li>
      			<li>
       				<Link to="/about">About</Link>
      			</li>
      		</ul>
       </div>


       <WindowComponent/>
        <hr/>

        <div className="row">
          <div className="col s2 m2 l2">
            <BusinessCardComponent/>
            </div>
          <div className="col s10 m10 l0">
            <div className="displayWindow">
      		   <Route exact path="/" component={HomeComponent} />
        	   <Route exact path="/projects" component={ProjectsComponent} />
        	   <Route exact path="/artwork" component={ArtworkComponent} />
        	   <Route exact path="/worldbuilding" component={WorldBuildingComponent} />
        	   <Route exact path="/about" component={AboutComponent} />
          </div>
      	 </div>
         </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default NavBarComponent;
