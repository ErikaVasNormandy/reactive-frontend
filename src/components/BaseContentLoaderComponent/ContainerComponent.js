import React, {Component} from 'react';
import axios from 'axios';

import InputComponent from './InputComponent';
import ListComponent from './ContentListComponent';
import TileComponent from './TileComponent';
class ContainerComponent extends Component {

  state = {
    contents: []
  }

  componentDidMount(){
    this.getContents();
  }

  getContents = () => {
    console.log("GET CONTENTS IN THE CONTAINERcOMPONENT")
    axios.get('/api/contents')
      .then(res => {
        if(res.data){
          this.setState({
            contents: res.data
          })

          console.log("GET CONTENTS")
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

  render() {
    {/* What is this for? */}
    let { contents } = this.state;

    return(
      <div>
        <h1>My Todo(s)</h1>
      {/* Ping the mlab server and get the contents back*/}
        { this.getContents()}
            {console.log("GET CONTENTS IN THE CONTAINERcOMPONENT")}

        <InputComponent getContents={this.getContents}/>

        {/* Render out the contents via a list */}
        <ListComponent contents={contents} deleteContent={this.deleteContent}/>
      </div>
    )
  }
}

export default ContainerComponent;