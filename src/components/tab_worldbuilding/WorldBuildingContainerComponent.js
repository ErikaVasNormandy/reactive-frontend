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

  deleteWorldBuilding = (id) => {
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

    const filterWorldBuildings = worldbuildings.filter(item => {

      return item.title.includes('a');
    })


    const SettingFilter = worldbuildings.filter(item => {

      return item.subject.includes('setting');
    })


    const AtomcraftFilter = worldbuildings.filter(item => {

      return item.title.includes('a');
    })

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
            { this.getWorldBuildings()}


            {this.state.showAdminPanel ? <WorldBuildingInputComponent getWorldBuildings={this.getWorldBuildings}/> : null }
 
            <button className="blue-grey lighten-4 adminBtn material-icons waves-effect waves-light btn " onClick={this.toggleAdminItem} value="showAdmin">palette</button>


              <ul className = "worldbuildinglist">
                <li>Setting</li>


                <li>Atomcraft</li>
                <li>Background</li>
                <li>Characters</li>
                <li>Plot?</li>
            </ul>

            {/* Render out the contents via a list */}
            <br/>

            <WorldBuildingListComponent worldbuildings={SettingFilter} deleteWorldBuilding={this.deleteWorldBuilding} isVisible={this.state.showAdminPanel}/>
      </div>
    )
  }
}

export default WorldBuildingContainerComponent;