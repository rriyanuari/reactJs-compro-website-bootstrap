import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class PageWrapper extends Component{

  render(){
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
        {this.props.children}
      </>
    )
  }
} 

export default PageWrapper;