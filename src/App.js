import './App.css';
import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Kullanici from './components/Kullanici/Kullanici';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
 

       <Route path="/kullanicilar/:kullaniciId" element={<Kullanici/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
