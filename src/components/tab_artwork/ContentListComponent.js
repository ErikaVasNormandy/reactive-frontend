import React from 'react';
import TileComponent from './TileComponent';
import sharedStyles from '../../App.css'
import moment from 'moment';


class ListComponent extends React.Component{
  constructor(props){
    super(props)
    this.setState({
      childShowAdmin:false
      })
   }
  


  componentWillReceiveProps(newProps) {
    this.setState({childShowAdmin: newProps.isVisible});
}

    render(){
    return(
      <div>
        <ul>
        {
          this.props.contents &&
            this.props.contents.length > 0 ?
            (
              this.props.contents.sort((a,b) => {
                return moment(a.dateStamp).isAfter(moment(b.dateStamp)) ? -1 : 1;
              }).map(content => {
                return(
                      <li key={content._id}> 
                        <TileComponent 
                          titleProp= {content.title} 
                          dateProp = {content.dateStamp} 
                          bodyProp={content.body} 
                          imagesProp = {content.images} 
                    // onClickProp = {}
                        ></TileComponent>
                        {this.state.childShowAdmin ? <button onClick={() => this.props.deleteContent(content._id)}  className="  btn waves-effect waves-light color: blue-grey darken-2" >Delete</button>: null }</li>
                       )   
                })
          ): ( <p>Loading Posts...</p>)
        }
      </ul>
      </div>
)}
}

export default ListComponent