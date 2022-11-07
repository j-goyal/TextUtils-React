// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light")  // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)


  // by default check Light Mode Radio button
  window.onload = function () {
    document.getElementById("lightMode").checked = true;
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }

  const toggleGreenMode = () => {
    document.getElementById("greenMode").checked = true;
    document.getElementById("lightMode").checked = false;
    document.getElementById("blueMode").checked = false;
    setMode("dark");
    document.body.style.backgroundColor = '#18402d';
    document.body.style.color = 'white';
    showAlert("Green Mode enabled", "success");

  }

  const toggleBlueMode = () => {
    document.getElementById("blueMode").checked = true;
    document.getElementById("lightMode").checked = false;
    document.getElementById("greenMode").checked = false;
    setMode("dark");
    document.body.style.backgroundColor = '#032352';
    document.body.style.color = 'white';
    showAlert("Blue Mode enabled", "success");
  }

  const toggleLightMode = () => {
    document.getElementById("lightMode").checked = true;
    document.getElementById("blueMode").checked = false;
    document.getElementById("greenMode").checked = false;
    setMode("light");
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("Light Mode enabled", "success");

  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleGreenMode={toggleGreenMode} toggleBlueMode={toggleBlueMode} toggleLightMode={toggleLightMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter text to analyze" mode={mode} alertShow={showAlert} />
      {/* <Routes> */}
      {/* <Route path="/about" element={<About alertShow={showAlert} />}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} alertShow={showAlert} />}>
          </Route> */}
      {/* </Routes> */}
      {/* </Router> */}
    </>
  )
}

export default App;
