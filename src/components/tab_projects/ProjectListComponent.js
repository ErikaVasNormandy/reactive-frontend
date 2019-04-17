import React, {Component} from 'react';
import TileComponent from './TileComponent';
import moment from 'moment';
import axios from 'axios';

class ProjectListComponent extends Component{ 


  constructor(props){
    super(props)
    this.setState({ 
      childShowAdmin:false,

    sortedprojects: this.props.projects.sort((a,b) => {
      return moment(a.dateStamp).isBefore(moment(b.dateStamp))
     })
    })

      this.getGithub = this.getGithub.bind(this)
      this.refineURL = this.refineURL.bind(this)

  }

  refineURL(bodyPropInput){
    var readmeurl = ""
    try{ 
      var bodyPropInput = bodyPropInput
      var baseurl = "https://api.github.com/repos/ErikaVasNormandy/"
      var extractedurlarray = bodyPropInput.split("/")
      readmeurl = baseurl + extractedurlarray[extractedurlarray.length -1 ] + "/readme"
      console.log(readmeurl)
      return(readmeurl)
    }
    catch(err){
      console.log(err)
    }
  }

  getGithub = (bodyPropInput) => {
    try{
      console.log("GetGITHUB called")
      axios.get(this.refineURL(bodyPropInput),{headers: {"accept": "application/vnd.github.v3+json"}}).then(
      res => {
       // console.log(this.refineURL(this.props.bodyProp))
        console.log(atob(res.data.content))
        return(atob(res.data.content))
        // this.setState({readme: atob(res.data.content)})
      })
    }
    catch(err){
      console.log("huh promise.reject",Promise.reject(err))
      return Promise.reject(err)
      }
  }



  componentWillReceiveProps(newProps) {
    this.setState({childShowAdmin: newProps.isVisible});
}

  // onClick = ()=>  {deleteContent(content._id)}
    render(){
      return(
      <div>
        <ul className="project_ul">
        {
          this.props.projects &&
            this.props.projects.length > 0 ?
            (
              this.props.projects
              .sort((a,b) => {
                return moment(a.dateStamp).isAfter(moment(b.dateStamp)) ? -1 : 1;
              })
              .map(project => {
                return(
                      <li key={project._id} className="project_li"> 
                           {/* { console.log("project list body input::", project.images)} */}

                        <TileComponent 
                          titleProp= {project.title} 
                          dateProp = {project.dateStamp} 
                          bodyProp={project.body} 
                          imagesProp = {project.images}
                        ></TileComponent>
                          

                        {this.state.childShowAdmin ? <button onClick={() => this.props.deleteProject(project._id)}  className="  btn waves-effect waves-light color: blue-grey darken-2" >Delete</button>: null }
                      </li>
                       )   
                })
            ): ( <li>Loading Projects...</li>)
        }
      </ul>
      </div>
)}
}
export default ProjectListComponent