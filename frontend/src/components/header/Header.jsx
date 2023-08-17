import React, { useState } from 'react';
import './header.css'
import { Menu, BellRing } from "lucide-react";
import userimage from '../assets/images/user-2.jpg';


// const close = (()=>{
//  const div=document.querySelectorAll("#word");

// for(let i=0;i<div.length;i++){
//  const styles = window.getComputedStyle(div[i]);
    
//     if(styles.visibility ==='visible'){
//     div[i].style.visibility='hidden';
//     document.getElementById('logo').style.visibility = 'hidden' ;
//     document.getElementById('border').style.cssText = "width:90px; transition: all 1s;";

//     }else{
//     setTimeout(()=>{
//     div[i].style.visibility='visible';}, 350);
//     setTimeout(()=>{
//     document.getElementById('logo').style.cssText="visibility :visible;";
//     }, 400)
//     document.getElementById('border').style.width = '240px';
//     }


//   }
// })


const Header = () => {

    const [isVisible, setIsVisible] = useState(true);

    const close = () => {
        const click = document.querySelector('#border');
        
        setIsVisible(!isVisible)
        click.style.visibility = isVisible ? "hidden" : "visible" ;
        // click.style.cssText = isVisible ? "width : 0px  " : "width : 240px " ;
        
        click.style.transition = "all 1s";
    }

    return (
        <div className="main-container">
            <div className="header-container">
                <div className="header-left">
                    <div className="logo">
                        <Menu color="#3574F2" strokeWidth={1.5} onClick={close} id='close' />
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