import React from 'react';
import "../../components/Sidebar/Sidebar";
import "../../components/header/Header";
import { Outlet, useNavigate } from 'react-router-dom';


const Private = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('auth_token');
  const render = React.useRef(true);

  React.useEffect(()=>{
    if (render.current){
        render.current=false;
    }
    else{
        if (!token){
            navigate("/", {replace: true});
        }
    }
  })
    return (
    <div>Private</div>
  )
}

export default Private