import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import Navbar from './components/navbar';
import Accueil from './components/accueil';
import Admin from './components/admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


class App extends React.Component {
  render(){
  return(
    <div className="container">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="accueil" element={<Accueil />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
  }
}

export default App;
