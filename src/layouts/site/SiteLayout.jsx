import React from 'react'
import { Outlet } from 'react-router-dom'

function SiteLayout() {
  return (
    <>
      <div>SiteLayout</div>
      <Outlet/>
    </>
  )
}

export default SiteLayout