import React, {Component} from 'react';
import TileComponent from './TileComponent';



class ProjectListComponent extends Component{ 


  constructor(props){
    super(props)
    this.setState({ 
      childShowAdmin:false,

    sortedprojects: this.props.projects.sort((a,b) => {
      return new Date(a.dateStamp).getTime() > new Date(b.dateStamp).getTime()
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
              this.props.projects.map(project => {
                return(
                      <li key={project._id} className="project_li"> 
                           {/* { console.log("project list body input::", project.images)} */}
                            
                        <TileComponent 
                          titleProp= {project.title} 
                          dateProp = {project.dateStamp} 
                          tagsProp={project.tags} 
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