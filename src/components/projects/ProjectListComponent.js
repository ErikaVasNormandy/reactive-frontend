import React from 'react';
import TileComponent from './TileComponent';

const ProjectListComponent = ({ projects, deleteProject }) => {
  // onClick = ()=>  {deleteContent(content._id)}
    return (
    <ul>
      {
        projects &&
          projects.length > 0 ?
          (
              projects.map(project => {
                return(
                      <li key={project._id}> 
                        <TileComponent 
                          titleProp= {project.title} 
                          dateProp = {project.dateStamp} 
                          bodyProp={project.basicDescription} 
                          imagesProp = {project.images} 
                    // onClickProp = {}
                        ></TileComponent>
                        <button onClick={() => deleteProject(project._id)}  className="adminItem deleteButton btn waves-effect waves-light color: blue-grey darken-2" >Delete</button>
                      </li>
                       )   
                })
          ): ( <li>No todo(s) left</li>)
        }
      </ul>
)}

export default ProjectListComponent