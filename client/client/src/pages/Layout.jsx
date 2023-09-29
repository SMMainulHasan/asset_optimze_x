import React from 'react'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Nabver from '../components/Nabver'
import Footer from '../components/Footer'
import TestNavber from '../components/TestNavber'

Nabver
TestNavber

function Layout() {
  return (
    <>
    <CssBaseline />
     <TestNavber />
      {/* <Nabver /> */}
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout
