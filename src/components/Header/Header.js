import React from 'react';
import { Route } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
    <div className="Header">    
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/projects">PROJECTS</a></li>
        <li><a href="/services">SERVICES</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
      <Route path='/' exact render={() => <h1>You Chose <button>HOME</button></h1>} />
      <Route path='/projects' exact render={() => <h1>You Chose <button>PROJECTS</button></h1>} />
      <Route path='/services' exact render={() => <h1>You Chose <button>SERVICES</button></h1>} />
      <Route path='/contact' exact render={() => <h1>You Chose <button>CONTACT</button></h1>} />
    </div>
    )
}

export default Header;