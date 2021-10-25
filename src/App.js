// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  
function App() {

  const [Mode, setMode]=useState('light'); //whether dark mode is enable or not-'dark','light'

  function toggleMode(){
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#393E46';
      showAlert("Dark Mode Enabled Successfully!","success");
      document.title="TextUtils -Dark";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled Successfully!","success");
      document.title="TextUtils -Light";
    }
  }

  const [alert, setAlert]=useState(null); 

  function showAlert(msg,type){
    setAlert({
      msg:msg,
      type:type
    });
    setTimeout(() => {
      setAlert(null); 
    }, 2000);
  }
  
  return (
    <>
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter Text to Analyse:" mode={Mode} alert={showAlert}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
