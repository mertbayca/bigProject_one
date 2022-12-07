import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/logo.svg"
import "./navbar.css"

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#what">What is ScoPym</a></p>
  <p><a href="#blog">Roadmap</a></p>
  <p><a href="#possibility">Use Cases</a></p>
  <p><a href="#features">Whitepaper</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="scop__navbar">
      <div className="scop__navbar-links">
        <div className="scop__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="scop__navbar-links_container">
         <Menu />
        </div>
      </div>
      <div className="scop__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="scop__navbar-menu">
        {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true) } /> }
        {toggleMenu && (
          <div className="scop__navbar-menu_container scale-up-center">
            <div className="scop__navbar-menu_container-links">
              <Menu />
              <div className="scop__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar