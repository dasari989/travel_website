import React, { useState } from 'react';
import './navbar.css';
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };

  return (
    <section className="navbarsection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <MdOutlineTravelExplore className="icon" />
            <h1>Travel.</h1>
          </a>
        </div>
        <div className={`navBar ${active ? 'activeNavbar' : ''}`}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={toggleNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={toggleNav} className="toggleNavbar">
          <TbGridDots  className="icons" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
