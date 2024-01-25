import React from 'react';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import './Navbar.css'; // Import your CSS file for additional styles
import { FaDraft2Digital } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useParams, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  

  const handleLogout = () => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to logout?');
  
    // If the user confirms, proceed with logout
    if (isConfirmed) {
      // You can add logic here for performing logout actions
      // For now, let's just navigate to the login page
      navigate('/login');
    }
  };
  
  return (
    <div className="navbar-container">
      <div className="navbar-content">
      <div className="logo">
  {/* Add your logo or brand name here */}
  <FaDraft2Digital />
  <h4>DigitalFlake</h4>
</div>
        <div className="menu">
         
        </div>
        <div className="burger-menu">
          <IoIosLogOut  className="burger-icon" onClick={handleLogout} />
          <p className="logout-text">Logout</p>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
