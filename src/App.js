import React, { Component } from 'react';

import NavBarComponent from './components/NavBar/NavBarComponent'


class App extends Component {
  render() {
    return (
      <div className = "rootElement">
         <NavBarComponent/>

      </div>
    );
  }
}

export default App;
