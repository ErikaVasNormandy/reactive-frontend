import React, {Component} from 'react';
import CharsheetTileComponent from './CharsheetTileComponent';

class CharsheetListComponent extends Component{ 


  constructor(props){
    super(props)
    this.setState({ 
      childShowAdmin:false,
      sortedcharsheet: this.props.charsheets
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
          this.props.charsheets &&
            this.props.charsheets.length > 0 ?
            (
              this.props.charsheets.sort(function(a,b){ 
                //return a.Priority < b.Priority ? 1 : -1;
                if(a.Priority < b.Priority) {
                  return 1
                }
                else {
                  return -1
                }
              }

              )
              .map(charsheet => {
                return(
                      <li key={charsheet._id} className="worldbuilding_li"> 
                           {/* { console.log("project list body input::", project.images)} */}
                            
                        <CharsheetTileComponent 
                          CharacterNameProp= {charsheet.CharacterName} 
                          PreviewPicProp = {charsheet.PreviewPic} 
                          RolesProp={charsheet.Roles} 
                          tldrProp = {charsheet.tldr} 
                          PriorityProp = {charsheet.Priority}
                          AgeProp = {charsheet.Age}
                          AlignmentProp = {charsheet.Alignment}
                          ChildhoodProp = {charsheet.Childhood}
                          GoalsProp = {charsheet.Goals}
                          BackgroundProp = {charsheet.Background}
                          CurrentStatusProp = {charsheet.CurrentStatus}
                          imagesProp = {charsheet.images}  
                        ></CharsheetTileComponent>

                        {this.state.childShowAdmin ? <button onClick={() => this.props.deleteCharsheet(charsheet._id)}  className="  btn waves-effect waves-light color: blue-grey darken-2" >Delete</button>: null }
                      </li>
                       )   
                })
            ): ( <li>Loading Materials</li>)
        }
      </ul>
      </div>
)}
}
export default CharsheetListComponent