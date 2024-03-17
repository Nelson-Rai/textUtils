import React,{ useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alerts from './component/Alerts';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alerts/>
    <div className="container my-3">
    <TextForm heading="Enter text to analyze." mode={mode} />
    <About/>
    </div>
    </>
  );
}

export default App;
