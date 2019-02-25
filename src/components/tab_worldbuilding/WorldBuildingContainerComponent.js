import React, {Component} from 'react';
import axios from 'axios';

import WorldBuildingInputComponent from './WorldBuildingInputComponent';
import WorldBuildingListComponent from './WorldBuildingListComponent';
import WorldBuildingTileComponent from './WorldBuildingTileComponent';

import CharsheetContainerComponent from './CharacterProfiles/CharsheetContainerComponent';
import sharedStyles from '../../App.css'

require('dotenv').config();

class WorldBuildingContainerComponent extends Component {
  constructor(props){
    super(props)

    this.toggleAdminItem = this.toggleAdminItem.bind(this);

  }


  getInitialState(){
    this.setState({
      showAdminPanel: false
    })
  }

  state = {
    worldbuildings: []
  }

  componentDidMount(){
    this.getWorldBuildings();
  }

  getWorldBuildings = () => {
    axios.get('/api/worldbuildings')
      .then(res => {
        if(res.data){
          this.setState({
            worldbuildings: res.data
          })


        }
      })
      .catch(err => console.log(err))
  }

  deleteWorldBuilding = (id) => {
    axios.delete(`/api/worldbuildings/${id}`)
      .then(res => {
        if(res.data){
          this.getWorldBuildings()
        }
      })
      .catch(err => console.log(err))
  }



  toggleAdminItem(e){
    var auth = window.prompt("Create a New Post: ")
    if(auth === `${process.env.REACT_APP_PW}`){
    this.setState({ 
      showAdminPanel: !this.state.showAdminPanel 
    });

  }
}

  render() {
    {/* What is this for? */}
    let { worldbuildings } = this.state;


    const SettingFilter = worldbuildings.filter(item => {

      return item.subject.includes('Setting');
    })



    const AtomcraftFilter = worldbuildings.filter(item => {

      return item.subject.includes('Atomcraft');
    })

    const EnvironmentFilter = worldbuildings.filter(item => {

      return item.subject.includes('Env');
    })

    const PoliticsFilter = worldbuildings.filter(item => {

      return item.subject.includes('Politics');
    })

    const CharactersFilter = worldbuildings.filter(item => {

      return item.subject.includes('Characters');
    })


    const PlotFilter = worldbuildings.filter(item => {

      return item.subject.includes('Plot');
    })

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
            { this.getWorldBuildings()}

            {this.state.showAdminPanel ? <WorldBuildingInputComponent getWorldBuildings={this.getWorldBuildings}/> : null }
 
            <button className="blue-grey lighten-4 adminBtn material-icons waves-effect waves-light btn" onClick={this.toggleAdminItem} value="showAdmin">palette</button>

            <table>

              <tr>
              <td>
                <ul className = "worldbuildinglist">
                  <li><h6>&nbsp;Intro</h6></li>
                  <li><h6>&nbsp;Setting</h6></li>
                  <li><h6>&nbsp;Atomcraft</h6></li>
                  <li><h6>&nbsp;Environment</h6></li>
                  <li><h6>&nbsp;Politics</h6></li>
                  <li><h6>&nbsp;Characters</h6></li>
                  <li><h6>&nbsp;Plot</h6></li>
                  <li><h6>&nbsp;</h6></li>
                </ul>
              </td>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              <td></td>

              <td>
                <h4>How to Use This Page</h4>
                <p>
                  This page has some semblance of organization, but mainly 
                  tidbits that go into more detail without making you read an essay.
                </p>
                <p> 
                  All of these take place in a setting called <strong>Arda Hyperion</strong>, 
                  a timeline where humanity has discovered <strong>Atomcraft</strong>, the
                  ability to interface with the Operating System running the Universe.
                </p>
                <p>
                  While this technically includes extraordinary abilities such as matter 
                  manipulation, teleportation, and energy conduction, their true hallmark is
                  their expertise in the creation and use of <strong>Extradimensional Material (EM)</strong>. 
                </p>
                <p>
                  For better or worse, humans have discovered how to conduct what is essentially Magic, and
                  apply it on an industrial scale to their technology, economies, and infrastructure. 
                  But all resources are finite, and for every miracle there must be a consequence. 
                  Ever the intrepid craftsmen, humanity's hunger for resources and energy, whether 
                  Earthbound or Cosmic in nature, will have its price. 
                </p>
              </td>

              </tr>
            </table>
            {/* Render out the contents via a list */}
            <br/>
            <h4>Intro</h4>
            <div id = "Introduction">

              <p>Arda Hyperion is tentative webseries set in an alternate timeline where humans 
              have discovered Atomcraft: limited read-write access to the Operating System running the Universe.

              Those who practice Atomcraft are known as "Atomancers", and are known for their expertise 
              in the forging and use of Extradimensional Matter (EM). 

              An Atomcrafted tool will be comprised of modular components, constantly shifting to match the 
              whims of the user who forged them. A firearm made from Extradimensional Matter will cycle 
              through different firing modes depending on the skill of the user that crafted those components.   </p>
             
              <table className="image">
                <tr>
                  <td> 
                    <img src="https://66.media.tumblr.com/b9031267e0839b004b03fbc1dfb5c887/tumblr_perfuuBA3h1qgojgxo2_540.gif"></img>
                  </td>
                  <td className="caption">Preview pic from the game Control (2019) WIP weapon test. This is an approximation of what a modern (3rd, 4th generation)
                  Atomancer can do with enough time and practice 
                  </td>
                </tr>
              </table>
           

              <p>
                There have been 3 generations of Atomancers, with each subsequent generation's Atomcraft ability to bypass reality declining
                over time. While crafting modular components made of Extradimensional Matter that are lighter and stronger than any other material on Earth
                is no small feat, this is a far cry from previous generations, particularly Generation 0, who were the last humans to wield magic before 
                vanishing without a trace. Since then, each generation has receded from importance, from being the ruling class with literal astronomical power 
                bringing prosperity and defending humanity from cosmic entities, to estranged craftsmen and eccentrics living on the fringes of society. 
              </p>
             


            </div>


            <h4>Setting</h4>
            <WorldBuildingListComponent worldbuildings={SettingFilter} deleteWorldBuilding={this.deleteWorldBuilding} isVisible={this.state.showAdminPanel}/>

            <h4>Atomcraft</h4>
            <WorldBuildingListComponent worldbuildings={AtomcraftFilter} deleteWorldBuilding={this.deleteWorldBuilding} isVisible={this.state.showAdminPanel}/>
     
            <h4>Environment</h4>
            <WorldBuildingListComponent worldbuildings={EnvironmentFilter} deleteWorldBuilding={this.deleteWorldBuilding} isVisible={this.state.showAdminPanel}/>
     
            <h4>Politics</h4>
            <WorldBuildingListComponent worldbuildings={PoliticsFilter} deleteWorldBuilding={this.deleteWorldBuilding} isVisible={this.state.showAdminPanel}/>

            <h4>Characters</h4>
            <CharsheetContainerComponent/>
            

            <h4>Plot</h4>
            <WorldBuildingListComponent worldbuildings={PlotFilter} deleteWorldBuilding={this.deleteWorldBuilding} isVisible={this.state.showAdminPanel}/>
     




      </div>
    )
  }
}

export default WorldBuildingContainerComponent;