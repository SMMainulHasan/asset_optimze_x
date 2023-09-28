import React from 'react'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Nabver from '../components/Nabver'
import Footer from '../components/Footer'

Nabver


function Layout() {
  return (
    <>
    <CssBaseline />
      <Nabver />
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout
