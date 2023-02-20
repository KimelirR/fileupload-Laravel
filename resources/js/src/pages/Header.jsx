import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="fixed-top">
    <div className="container-fluid d-flex justify-content-between align-items-center">

        <h1 className="logo me-auto me-lg-0">
            <Link to={'/'}>Ronald</Link>
        </h1>


        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li>
                    <Link className="active" to={'/'}>Home</Link>
                </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/resume'}>Resume</Link>
                    </li>
                    <li>
                        <Link to={'/services'}>Services</Link>
                    </li>
                    <li>
                        <Link to={'/portfolio'}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"/>
        </nav>{ /* .navbar */ }

        <div className="header-social-links">
            <Link to="#" className="twitter"><i className="bi bi-twitter"/></Link>
            <Link to="#" className="facebook"><i className="bi bi-facebook"/></Link>
            <Link to="#" className="instagram"><i className="bi bi-instagram"/></Link>
            <Link to="#" className="linkedin"><i className="bi bi-linkedin"/></Link>
        </div>
    </div>

</header>
  )
}

export default Header
