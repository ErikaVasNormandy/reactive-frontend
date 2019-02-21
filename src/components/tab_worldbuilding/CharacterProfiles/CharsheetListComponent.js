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
              this.props.charsheets
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
                          GenderProp = {charsheet.Gender}
                          TierProp = {charsheet.TierProp}
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