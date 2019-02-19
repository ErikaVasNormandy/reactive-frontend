

import React, { Component } from 'react';
import ContainerComponent from '../BaseContentLoaderComponent/ContainerComponent'

import { BrowserRouter, Route, Link } from "react-router-dom";

import MetaTags from 'react-meta-tags';
class HomeComponent extends Component {
  render() {
    return (
      <div>
     	    <meta property="og:url" content="http://reactive.scavengers-repo.com"/>
    		<meta property="og:type" content="website" />
    		<meta property="og:title" content="Reactive Version" />
    		<meta name="og:description" content="It's a site... for stuff"/>
    		<meta name="og:image" content="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/tab-home/WebPreviewHome.png"/>
      	<h2>Home</h2>
      	<ContainerComponent/>
      </div>
    );
  }
}

export default HomeComponent;

