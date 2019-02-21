import React, {Component} from 'react';
import axios from 'axios';

import CharsheetInputComponent from './CharsheetInputComponent';
import CharsheetListComponent from './CharsheetListComponent';
import CharsheetTileComponent from './CharsheetTileComponent';

require('dotenv').config();

class CharsheetContainerComponent extends Component {
  constructor(props){
    super(props)
    this.getCharsheets = this.getCharsheets.bind(this)
    this.toggleAdminItem = this.toggleAdminItem.bind(this);

  }


  getInitialState(){
    this.setState({
      showAdminPanel: false
    })
  }

  state = {
    charsheets: []
  }

  componentDidMount(){
    this.getCharsheets();
  }

  getCharsheets = () => {
    axios.get('/api/charsheets')
      .then(res => {
        if(res.data){
          this.setState({
            charsheets: res.data
          })


        }
      })
      .catch(err => console.log(err))
  }

  deleteCharsheet = (id) => {
    axios.delete(`/api/charsheets/${id}`)
      .then(res => {
        if(res.data){
          this.getCharsheets()
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
    let { charsheets } = this.state;


    

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
            { this.getCharsheets() }


            {this.state.showAdminPanel ? <CharsheetInputComponent getCharsheets={this.getCharsheets}/> : null }
 
            <button className="blue-grey lighten-4 adminBtn material-icons waves-effect waves-light btn " onClick={this.toggleAdminItem} value="showAdmin">palette</button>


            {/* Render out the contents via a list */}
            <br/>


           
            <h4>Characters</h4>
            <CharsheetListComponent charsheets={charsheets} deleteCharsheet={this.deleteCharsheet} isVisible={this.state.showAdminPanel}/>





      </div>
    )
  }
}

export default CharsheetContainerComponent;