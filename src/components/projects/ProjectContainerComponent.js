import React, {Component} from 'react';
import axios from 'axios';

import ProjectInputComponent from './ProjectInputComponent';
import ProjectListComponent from './ProjectListComponent';
import TileComponent from './TileComponent';

class ProjectContainerComponent extends Component {
  constructor(props){
    super(props)

    this.toggleAdminItemProject = this.toggleAdminItemProject.bind(this);

  }


  getInitialState(){
    this.setState({
      showAdminPanelProject: false
    })
  }

  state = {
    projects: []
  }

  componentDidMount(){
    this.getProjects();
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



  toggleAdminItemProject(e){
    var auth = window.prompt(e.target.value)
    if(auth == "password"){
    this.setState({ 
      showAdminPanelProjects: !this.state.showAdminPanelProjects
    });

  }
}

  render() {
    {/* What is this for? */}
    let { projects } = this.state;

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
        { this.getProjects()}

        {this.state.showAdminPanelProject ? <ProjectInputComponent getProjects={this.getProjects}/> : null }
        <button onClick={this.toggleAdminItemProject} value="showAdmin">'Login'</button>


        {/* Render out the contents via a list */}
        <ProjectListComponent projects={projects} deleteProject={this.deleteProject}/>
      </div>
    )
  }
}

export default ProjectContainerComponent;