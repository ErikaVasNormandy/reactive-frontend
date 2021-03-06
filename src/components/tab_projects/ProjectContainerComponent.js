import React, {Component} from 'react';
import axios from 'axios';

import ProjectInputComponent from './ProjectInputComponent';
import ProjectListComponent from './ProjectListComponent';
import sharedStyles from '../../App.css';


require('dotenv').config();

class ProjectContainerComponent extends Component {
  constructor(props){
    super(props)

    this.toggleAdminItem = this.toggleAdminItem.bind(this);
    this.getProjects = this.getProjects.bind(this)
    

  }


  getInitialState(){
    this.setState({
      showAdminPanel: false
    })
  }

  state = {
    projects: []
  }

  componentDidMount(){
    this.getProjects();
  }

  componentWillUnmount() {
    clearInterval(this.getProjects);
  }
  refineURL(props){
    console.log("REFINED URL CALLED")
    var bodyPropInput = this.props.bodyProp

    var baseurl = "https://api.github.com/repos/ErikaVasNormandy/"
    var extractedurlarray = bodyPropInput.split("/")
    var readmeurl = baseurl + extractedurlarray[extractedurlarray.length -1 ] + "/readme"
     // https://github.com/ErikaVasNormandy/MERNstack
    return(readmeurl)
  }
  getGithub = () => {
    axios.get("https://api.github.com/repos/ErikaVasNormandy/reactive-frontend/readme",{headers: {"accept": "application/vnd.github.v3+json"}}).then(
      res => {

        console.log(atob(res.data.content))
        console.log("GetGithub called")
      })
  }
  getProjects = () => {
    axios.get('/api/projects')
      .then(res => {
        if(res.data){
          this.setState({
            projects: res.data
          })

        }
      })
      .catch(err => console.log(err))
  }

  deleteProject = (id) => {
    axios.delete(`/api/projects/${id}`)
      .then(res => {
        if(res.data){
          this.getProjects()
        }
      })
      .catch(err => console.log(err))
  }



  toggleAdminItem(e){
    var auth = window.prompt("Create a New Post: ")
    if(auth === `${process.env.REACT_APP_PW_PROJ}`){
    this.setState({ 
      showAdminPanel: !this.state.showAdminPanel 
    });

  }
}

  render() {
    let { projects } = this.state;
    return(
      <div>


            {this.state.showAdminPanel ? <ProjectInputComponent getProjects={this.getProjects}/> : null }
 
            <button className="blue-grey lighten-4 adminBtn material-icons waves-effect waves-light btn " onClick={this.toggleAdminItem} value="showAdmin">palette</button>

            <br/>
            <ProjectListComponent projects={projects} deleteProject={this.deleteProject} isVisible={this.state.showAdminPanel}/>
      </div>
    )
  }
}

export default ProjectContainerComponent;