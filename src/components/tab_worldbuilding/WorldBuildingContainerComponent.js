import React, {Component} from 'react';
import axios from 'axios';

import WorldBuildingInputComponent from './WorldBuildingInputComponent';
import WorldBuildingListComponent from './WorldBuildingListComponent';
import WorldBuildingTileComponent from './WorldBuildingTileComponent';
import sharedStyles from '../../App.css'

require('dotenv').config();

class WorldBuildingContainerComponent extends Component {
  constructor(props){
    super(props)

    this.toggleAdminItem = this.toggleAdminItem.bind(this);

  }


  getInitialState(){
    this.setState({
      showAdminPanel: false
    })
  }

  state = {
    worldbuildings: []
  }

  componentDidMount(){
    this.getWorldBuildings();
  }

  getWorldBuildings = () => {
    axios.get('/api/worldbuildings')
      .then(res => {
        if(res.data){
          this.setState({
            worldbuildings: res.data
          })

        }
      })
      .catch(err => console.log(err))
  }

  deleteProject = (id) => {
    axios.delete(`/api/worldbuildings/${id}`)
      .then(res => {
        if(res.data){
          this.getWorldBuildings()
        }
      })
      .catch(err => console.log(err))
  }



  toggleAdminItem(e){
    var auth = window.prompt("Create a New Post: ")
    if(auth == `${process.env.REACT_APP_PW}`){
    this.setState({ 
      showAdminPanel: !this.state.showAdminPanel 
    });

  }
}

  render() {
    {/* What is this for? */}
    let { worldbuildings } = this.state;

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
            { this.getWorldBuildings()}


            {this.state.showAdminPanel ? <WorldBuildingInputComponent getWorldBuildings={this.getWorldBuildings}/> : null }
 
            <button className="blue-grey lighten-4 adminBtn material-icons waves-effect waves-light btn " onClick={this.toggleAdminItem} value="showAdmin">palette</button>

            {/* Render out the contents via a list */}
            <br/>
            <WorldBuildingListComponent worldbuildings={worldbuildings} deleteWorldBuilding={this.deleteWorldBuilding} isVisible={this.state.showAdminPanel}/>
      </div>
    )
  }
}

export default WorldBuildingContainerComponent;