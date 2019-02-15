import React, { Component } from 'react';
import {styles} from './navbar.css';

import HomeComponent from '../tab_home/HomeComponent'
import ProjectsComponent from '../tab_projects/ProjectsComponent'
import ArtworkComponent from '../tab_artwork/ArtworkComponent'
import WorldBuildingComponent from '../tab_worldbuilding/WorldBuildingComponent'
import AboutComponent from '../tab_about/AboutComponent'

import WindowComponent from '../WindowComponent/WindowComponent'
import BusinessCardComponent from '../BusinessCardComponent/BusinessCardComponent'

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class NavBarComponent extends Component {
  render() {
    return (
     <div>
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
            <Switch>
	             <div className="displayWindow">
      		        <Route exact path="/" component={HomeComponent} />
        	         <Route exact path="/projects" component={ProjectsComponent} />
        	         <Route exact path="/artwork" component={ArtworkComponent} />
        	         <Route exact path="/worldbuilding" component={WorldBuildingComponent} />
        	         <Route exact path="/about" component={AboutComponent} />
               </div>
            </Switch>
      	   </div>
         </div>

        </div>
      </BrowserRouter>
    </div>
    
    );
  }
}

export default NavBarComponent;
