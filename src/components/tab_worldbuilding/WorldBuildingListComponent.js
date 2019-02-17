import React, {Component} from 'react';
import WorldBuildingTileComponent from './WorldBuildingTileComponent';
import moment from 'moment';


class WorldBuildingListComponent extends Component{ 


  constructor(props){
    super(props)
    this.setState({ 
      childShowAdmin:false,
      sortedworldbuilding: this.props.worldbuildings.sort((a,b) => {
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
          this.props.worldbuildings &&
            this.props.worldbuildings.length > 0 ?
            (
              this.props.worldbuildings
              .sort((a,b) => {
                return moment(a.dateStamp).isAfter(moment(b.dateStamp)) ? -1 : 1;
              })
              .map(worldbuilding => {
                return(
                      <li key={worldbuilding._id} className="worldbuilding_li"> 
                           {/* { console.log("project list body input::", project.images)} */}
                            
                        <WorldBuildingTileComponent 
                          titleProp= {worldbuilding.title} 
                          dateProp = {worldbuilding.dateStamp} 
                          bodyProp={worldbuilding.body} 
                          imagesProp = {worldbuilding.images} 
                          subjectProp = {worldbuilding.subject}
                        ></WorldBuildingTileComponent>

                        {this.state.childShowAdmin ? <button onClick={() => this.props.deleteWorldBuilding(worldbuilding._id)}  className="  btn waves-effect waves-light color: blue-grey darken-2" >Delete</button>: null }
                      </li>
                       )   
                })
            ): ( <li>Loading Materials</li>)
        }
      </ul>
      </div>
)}
}
export default WorldBuildingListComponent