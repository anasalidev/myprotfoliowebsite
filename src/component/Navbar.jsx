import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
// import { MdColorLens } from "react-icons/md";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (

        <>
            <div className="navbar">
                <div className="imgBx">
                    <h1> <span>A</span><span>A</span> </h1>
                    <p> Web Developer</p>
                </div>
                <div className="nav" >
                    <ul className={menuOpen ? "open" : ""}>
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink to="/About"><li>About</li></NavLink>
                        <NavLink to="/Service"><li>Service</li></NavLink>
                        <NavLink to="/Protfile"><li>Protfolio</li></NavLink>
                        <NavLink to="/Contact"><li>Contact</li></NavLink>
                    </ul>
                </div>
                <div className="menu" onClick={() => {
                    setMenuOpen(!menuOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* <div className="clr-icon"><MdColorLens /> </div> */}
            </div>
        </>
    )
}

export default Navbar
