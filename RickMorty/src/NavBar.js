import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Rick and Morty: Black Jack</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/play">Play</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/rules">Rules</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}