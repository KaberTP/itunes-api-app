//Imports 
import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Items from './components/Items.js';



class App extends React.Component {
  //Render
  render() {
    return (
      <div className='container'>
          <Header/>
          <Items/>
      </div>
    )
  }//end Render
}//end App 

export default App;
