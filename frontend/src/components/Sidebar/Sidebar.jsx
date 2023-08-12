import React from 'react'

const Sidebar=()=>{
  return (
    
        <div classname="sidebar-box">
            <div classname="sidebar-logo">
                <a href="index.html"><img src="images/logo.png" alt="" /></a>
            </div>
            <div classname="sidebar-menu">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>

        </div>
      
    </div>
  )
}

export default Sidebar;
