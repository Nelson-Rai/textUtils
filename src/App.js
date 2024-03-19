import React,{ useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alerts from './component/Alerts';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      document.title = 'TextUtil-dark mode'
      showAlert('Dark mode has been enabled', 'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title = 'TextUtil-light mode'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  const toggleGreenMode = () =>{
    if (mode !== 'green'){
      setMode('green');
      document.body.style.backgroundColor='green';
      document.title = 'TextUtil-green mode'
      showAlert('Green mode has been enabled', 'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title = 'TextUtil-light mode'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type,
    })
    setTimeout(()=> {
      setAlert(null);
    }, 2000)
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title = "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode}/>
    <Alerts alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About />}>
        </Route>
        <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;
