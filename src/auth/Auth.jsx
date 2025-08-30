import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname == "/auth"){
      navigate("/auth/login");
    }
  },[]);
  return (
    <>
      <div>Auth</div>
      <Outlet/>
    </>
  )
}

export default Auth