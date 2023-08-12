import React from 'react';
import "./Sidebar.css";
import logo from "../assets/images/logo.png";
import { LayoutDashboard, User, Wallet, LogOut } from "lucide-react";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (

        <div className="sidebar-container">
            <div className="top">
                <img src={logo} alt="logo" />
            </div>
            <div className="sidebar-menu">
                {/* Dashboard link Open */}
                <div className="sidebar-wrapper">
                    <LayoutDashboard color="#3574F2" strokeWidth={1.5} />
                    <Link to={"/dashboard"} className='page-links'>Dashboard</Link>
                </div>
                {/* Dashboard link Closed */}

                {/* User link Open */}
                <div className="sidebar-wrapper">
                    <User color="#3574F2" strokeWidth={1.5} />
                    <Link to={"/register"} className='page-links'>Profile</Link>
                </div>
                {/* User link Closed */}
               
               {/* Checkout link is open */}
                <div className="sidebar-wrapper">
                    <Wallet color="#3574F2" strokeWidth={1.5} />
                    <Link to={"/checkout"} className='page-links' >Checkout</Link>
                </div>
                {/* Checkout link is closed */}

                {/* Logout link is open */}
                <div className="sidebar-wrapper">
                    <LogOut color="#3574F2" strokeWidth={1.5} />
                    <Link to={"/logout"} className='page-links' >Logout</Link>
                </div>
                {/* Logout link is closed */}

            </div>
        </div>

    );
}

export default Sidebar;
