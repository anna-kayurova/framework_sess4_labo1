import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import Navbar from './components/navbar';


class App extends React.Component {
  render(){
  return(
    <div className="container">
      <Navbar />
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
