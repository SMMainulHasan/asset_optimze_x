import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorgeService';
NavLink
getToken
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'

function TestNavber() {
  const {access_token} = getToken()
  return (
    <>
       <Navbar collapseOnSelect expand="lg"  className="bg-body-dark" style={{backgroundColor:'#006482'}} >
      <Container>
        <Navbar.Brand style={{color:'white'}} href="#home" >
        <Button component={NavLink} to='/'  sx={{color:'white', fontSize:'30px', textTransform:'none' }}>assetOptimzeX</Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto" >
            <Nav.Link style={{color:'white'}} href="#features">Features</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#pricing">Pricing</Nav.Link>
            {/* <NavDropdown style={{color:'white'}} title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item style={{color:'white'}} href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{color:'white'}} href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link style={{color:'white'}} href="#deets">YOUR ASSET</Nav.Link>
            <Nav.Link style={{color:'white'}} eventKey={2} href="#memes">
            {access_token ? <Button component={NavLink} to='/dashboard' style={({isActive})=>{return{backgroundColor: isActive ? '#6d1b7b':''}}} sx={{color:'white', textTransform:'none'}}>Dashboard</Button> : <Button component={NavLink} to='/login' style={({isActive})=>{return{backgroundColor: isActive ? '#6d1b7b':''}}} sx={{color:'white', textTransform:'none'}}>GET STARTED</Button> }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default TestNavber
