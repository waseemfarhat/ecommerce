import React from 'react'
import NavigationLinks from './NavigationLinks'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <NavigationLinks />
      <Outlet />
    </div>
  )
}

export default RootLayout
