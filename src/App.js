import React from 'react';

import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';
import Sidebar from './containers/Sidebar/Sidebar';
import Header from './containers/Header/Header';

import classes from './App.module.css';


function App() {
  return (
    <div className={classes.gridContainer}>
      <Header/>
      <Sidebar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
