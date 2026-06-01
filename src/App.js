import './App.css';
import Navbar from './components/shared/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/shared/Footer/Footer';
import Login from './components/Login/Login'; // ⬅️ New import
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ⬅️ React Router import

function App() {
  let projectTitle = "InternX";
  let [mode,setMode] = useState('dark');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      // document.querySelector("#navmenu ul li a").classList.toggle('link');
    }else{
      setMode('light');
      // document.querySelector("#navmenu ul li a").classList.toggle('link');
    }
  }
  

  return (
    <div className="App">
      <Navbar projectTitle={projectTitle} mode={mode} toggleMode={toggleMode}/>
      <Hero projectTitle={projectTitle} mode={mode} toggleMode={toggleMode}/>
      <About projectTitle={projectTitle} mode={mode} toggleMode={toggleMode}/>
      <Footer projectTitle={projectTitle} mode={mode} toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
