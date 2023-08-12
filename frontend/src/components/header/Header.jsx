import React from 'react';
import './header.css'
import { Menu, BellRing } from "lucide-react";
import userimage from '../assets/images/user-2.jpg';

const Header = () => {
    return (

        <div className="main-container">
            <div className="header-container">
                <div className="header-left">
                    <div className="logo">
                        <Menu color="#3574F2" strokeWidth={1.5} />
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-bell">
                        <BellRing size={24} />
                    </div>
                    <div className="header-user">
                        <img src={userimage} alt="user" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;