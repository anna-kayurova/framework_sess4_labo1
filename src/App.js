import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import Navbar from './components/navbar';
import Accueil from './components/accueil';
import Admin from './components/admin';


class App extends React.Component {
  render(){
  return(
    <div className="container">
      <Navbar />
      <Accueil />
      <Admin />
    </div>
  );
  }
}
/*function App() {
  return (
    <div className="container">
      Bonjour au monde de React!
    </div>
  );
}*/

export default App;
