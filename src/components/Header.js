import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/coney-logo1.svg'
import { GiFruitTree } from 'react-icons/gi'

const Header = () => {
    return (
        <header className="header-container">
            <div className="nav-header"><Link to="/"><img src={logo} alt="logo" /></Link> </div>
            
            <div><h2 className="title main-header black">Coney's Quality Lawn Services</h2></div>
            <div className="right main-header-small"><h5> Aurora, CO 80013</h5></div>
        
        </header>
    )
}

export default Header
