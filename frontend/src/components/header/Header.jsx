import React from 'react';
import './header.css'
import { Menu, BellRing } from "lucide-react";
import userimage from '../assets/images/user-2.jpg';


const close = (()=>{
  var x = document.getElementById("sidebar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
})

const Header = () => {
    return (
        <div className="main-container">
            <div className="header-container">
                <div className="header-left">
                    <div className="logo">
                        <Menu color="#3574F2" strokeWidth={1.5} onClick={close} />
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