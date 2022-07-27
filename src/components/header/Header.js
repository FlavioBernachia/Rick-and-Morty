import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import animation from "../../assets/pngegg.png"

const Header = () => {
    return (
        <div className='header'>
        <img className='logo' src={logo} alt='logotipo rick and morty'></img>
        <div className="animacion rickViajando"></div>
        </div>
    )
}

export default Header