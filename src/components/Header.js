import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/coney-logo1.svg'
import { GiFruitTree } from 'react-icons/gi'

const Header = () => {
    return (
        <header className="recipes-container black">
            <div className="nav-header"><Link to="/"><img src={logo} alt="logo" /></Link> </div>
            
            <div><h2 className="title main-header">Coney's Quality Lawn Services</h2>
            <span className="right"><h5 className="main-header-small"> Aurora, CO 80013</h5></span>
            </div>
        </header>
    )
}

export default Header
