import React from 'react'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <>
      <div className="replace">Header</div>
      <Outlet/>
      <div className="replace">Footer</div>
    </>
  )
}

export default UserDashboard