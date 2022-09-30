import React from "react";
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="navbar-brand">
                Bienvenue
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/admin" className="nav-link">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/accueil" className="nav-link">Accueil</Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Navbar;