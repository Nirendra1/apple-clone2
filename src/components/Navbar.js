import { faAppleAlt, faBagShopping, faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

import { useState } from 'react'

import { NavLink } from 'react-bootstrap'

// import './Navbar.css';
 

const Navbar = () => {

   const [toggle, setToggle] = useState(false)

    const toggleMenu = () =>{

        setToggle(!toggle)

    }

  return (

    <>

    <div className={`apple-header`}>

        <div className={`apple-nav ${toggle ?'mobile-nav':'apple-nav'}`}>

            <NavLink><FontAwesomeIcon icon={faAppleAlt} className='mobi-none' /></NavLink>

            <NavLink>Store</NavLink>

            <NavLink>Mac</NavLink>

            <NavLink>iPad</NavLink>

            <NavLink>iPhone</NavLink>

            <NavLink>Watch</NavLink>

            <NavLink>AirPods</NavLink>

            <NavLink>TV & Home</NavLink>

            <NavLink>Only on Apple</NavLink>

            <NavLink>Accessories</NavLink>

            <NavLink>Support</NavLink>

            <NavLink><FontAwesomeIcon icon={faSearch} className='mobi-none' /></NavLink>

            <NavLink><FontAwesomeIcon icon={faBagShopping} /></NavLink>

        </div>

    </div>

        <div className="mobi-view">   

        <div className='d-flex justify-content-between align-items-center p-3 '>

            <span className="menu-bars" onClick={toggleMenu}>{toggle?<FontAwesomeIcon icon={faTimes} />:<FontAwesomeIcon icon={faBars} />}</span>

            <NavLink className='menu-bars'><FontAwesomeIcon icon={faAppleAlt} /></NavLink>

            <NavLink className='menu-bars'>{!toggle?<FontAwesomeIcon icon={faBagShopping} />:null}</NavLink>

        </div>

            <div className={`nav-search ${toggle? 'active-menu':'d-none'}`}><FontAwesomeIcon icon={faSearch} /><input /></div>

        </div>

    </>

  )

}

 

export default Navbar;

 