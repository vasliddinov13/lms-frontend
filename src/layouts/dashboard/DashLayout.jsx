import React from 'react'
import { Outlet } from 'react-router-dom'

function DashLayout() {
  return (
    <>
      <div>DashLayout</div>
      <Outlet/>
    </>
  )
}

export default DashLayout