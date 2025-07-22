import {Link}  from 'react-router-dom'
import './Header.css'
import React, { useState } from "react"; // Import useState
function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  // Function to close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
    return(
        <div className='Header1'>
            <header>
                <nav>
                    <a className='navbar'>Vivkanand college</a>
                    <div className='desktop-nav'>
                    <Link to={"/home"} className='nav'>Home</Link>
                    <Link to={"/about"} className='nav'>AboutPage</Link>
                    <Link to={"/contact"} className='nav'>ContactUs</Link>
                    <Link to={"/courses"}className='nav'>CoursesPage</Link>
                    <Link to={"/Admission"}className='nav-item'>Apply now!</Link>
                    </div>
                 </nav>
                 {/* Mobile Hamburger Button */}
      <button className="hamburger-menu" onClick={toggleDrawer}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      {/* Mobile Drawer Navigation */}
      <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer-btn" onClick={toggleDrawer}>
          ✕
        </button>
        <Link to="/" className="nav-item" onClick={closeDrawer}>
          Home
        </Link>
        <Link to="/about" className="nav-item" onClick={closeDrawer}>
          About
        </Link>
        <Link to="/courses" className="nav-item" onClick={closeDrawer}>
          Courses
        </Link>
        <Link to="/contact" className="nav-item" onClick={closeDrawer}>
          Contact
        </Link>
        <Link
          to="/admissions"
          className="nav-item btn primary-btn"
          onClick={closeDrawer}
        >
          Apply Now!
        </Link>
      </nav>
      {/* Overlay when drawer is open */}
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}
            </header>

        </div>
    )
}

export default Header;