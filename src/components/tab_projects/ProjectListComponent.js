import React, {Component} from 'react';
import TileComponent from './TileComponent';
import moment from 'moment';


class ProjectListComponent extends Component{ 


  constructor(props){
    super(props)
    this.setState({ 
      childShowAdmin:false,

    sortedprojects: this.props.projects.sort((a,b) => {
      return moment(a.dateStamp).isBefore(moment(b.dateStamp))
    })
   })

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