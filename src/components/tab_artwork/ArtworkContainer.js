import React, {Component} from 'react';
import axios from 'axios';

import InputComponent from './InputComponent';
import ListComponent from './ContentListComponent';
import TileComponent from './TileComponent';

import sharedStyles from '../../App.css'

require('dotenv').config();


class ArtworkContainer extends Component {
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
    artworks: []
  }

  componentDidMount(){
    this.getContents();
  }

  getContents = () => {
    axios.get('/api/artworks')
      .then(res => {
        if(res.data){
          this.setState({
            artworks: res.data
          })

        }
      })
      .catch(err => console.log(err))
  }


  deleteContent = (id) => {
    axios.delete(`/api/artworks/${id}`)
      .then(res => {
        if(res.data){
          this.getContents()
        }
      })
      .catch(err => console.log(err))
  }


  toggleAdminItem(e){
    var auth = window.prompt("Create a New Post: ")
    if(auth === `${process.env.REACT_APP_PW}`){
    this.setState({ 
      showAdminPanel: !this.state.showAdminPanel 
    });

  }
}

  render() {
    {/* What is this for? */}
    let { artworks } = this.state;

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
            { this.getContents() }
            <button className="blue-grey lighten-4 adminBtn material-icons waves-effect waves-light btn" onClick={this.toggleAdminItem} value="showAdmin">videogame_asset</button>

            {this.state.showAdminPanel ? <InputComponent getContents={this.getContents}/> : null }
    

       

            {/* Render out the contents via a list */}
            <br/>
            <ListComponent contents={artworks} deleteContent={this.deleteContent} isVisible={this.state.showAdminPanel}/>
      </div>
    )
  }
}

export default ArtworkContainer;
