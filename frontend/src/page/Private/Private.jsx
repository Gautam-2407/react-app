import React from 'react';
import "../../components/Sidebar/Sidebar";
// import "../../components/header/Header";
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from 'lucide-react';
import "./Private.css";

const Private = ({onLogout}) => {
const navigate = useNavigate();
const location = useLocation();
const authToken = sessionStorage.getItem("auth_token");
const initialRenderRef = React.useRef(true);

React.useEffect(() => {
  if (initialRenderRef.current) {
    initialRenderRef.current = false;
  } else {
    if (!authToken) navigate("/", { replace: true });
  }
}, [authToken, navigate]);

const isProfileRoute = location.pathname === "/register";

return authToken ? (
  <div className="main-container">
    <Sidebar onLogout={onLogout} />
    <div className="main-screen">
      {!isProfileRoute }
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  </div>
) : (
  navigate("/")
);
};



export default Private;