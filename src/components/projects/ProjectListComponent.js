import React, {Component} from 'react';
import TileComponent from './TileComponent';



class ProjectListComponent extends Component{ 


  constructor(props){
    super(props)
    this.setState({

    sortedprojects: this.props.projects.sort((a,b) => {
      return new Date(a.dateStamp).getTime() > new Date(b.dateStamp).getTime()
    })
   })

  }


  // onClick = ()=>  {deleteContent(content._id)}
    render(){
      return(
      <div>
        <ul className="project_ul">
        // {console.log(this.sortedprojects)}
        {
          this.props.projects &&
            this.props.projects.length > 0 ?
            (
              this.props.projects.map(project => {
                return(
                      <li key={project.dateStamp} className="project_li"> 
                           {/* { console.log("project list body input::", project.images)} */}
                            
                        <TileComponent 
                          titleProp= {project.title} 
                          dateProp = {project.dateStamp} 
                          tagsProp={project.tags} 
                          imagesProp = {project.images} 
                        ></TileComponent>
                        <button onClick={() => this.props.deleteProject(project._id)}  className="adminItem deleteButton btn waves-effect waves-light color: blue-grey darken-2" >Delete</button>
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