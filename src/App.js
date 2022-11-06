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

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      document.getElementById("blueModeDiv").style.visibility = 'hidden';
      setMode("dark");
      document.body.style.backgroundColor = '#18402d';
      document.body.style.color = 'white';
      showAlert("Green Mode enabled", "success");
    }
    else {
      document.getElementById("blueModeDiv").style.visibility = 'visible';
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode enabled", "success");
    }
  }

  const toggleBlueMode = () => {
    if (mode === 'light') {
      document.getElementById("darkModeDiv").style.visibility = 'hidden';
      setMode("dark");
      document.body.style.backgroundColor = '#032352';
      document.body.style.color = 'white';
      showAlert("Blue Mode enabled", "success");
    }
    else {
      document.getElementById("darkModeDiv").style.visibility = 'visible';
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleBlueMode={toggleBlueMode} />
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
