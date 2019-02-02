import React, {Component} from 'react';
import axios from 'axios';

import InputComponent from './InputComponent';
import ListComponent from './ContentListComponent';
import TileComponent from './TileComponent';

import sharedStyles from '../../App.css'

require('dotenv').config();
const pw = process.env.PW



class ContainerComponent extends Component {
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
    contents: []
  }

  componentDidMount(){
    this.getContents();
  }

  getContents = () => {
    // console.log(`${process.env.REACT_APP_PW}`)
    axios.get('/api/contents')
      .then(res => {
        if(res.data){
          this.setState({
            contents: res.data
          })

        }
      })
      .catch(err => console.log(err))
  }


  deleteContent = (id) => {
    axios.delete(`/api/contents/${id}`)
      .then(res => {
        if(res.data){
          this.getContents()
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
    let { contents } = this.state;

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
        { this.getContents() }

          {this.state.showAdminPanel ? <InputComponent getContents={this.getContents}/> : null }
    


            <button className="material-icons" onClick={this.toggleAdminItem} value="showAdmin">palette</button>

        {/* Render out the contents via a list */}
          <ListComponent contents={contents} deleteContent={this.deleteContent}/>
      </div>
    )
  }
}

export default ContainerComponent;