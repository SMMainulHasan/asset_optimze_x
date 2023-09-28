import React, { useEffect, useState } from 'react'
import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import ChangePassword from './auth/ChangePassword'
import { getToken, removeToken } from '../services/LocalStorgeService'
import { useDispatch } from 'react-redux'
import { unSetUserToken } from '../features/authSlice'
import { useGetLoggedUserQuery } from '../services/userAuthApi'
import { setUserInfo, unSetUserInfo } from '../features/userSlice'
import Footer from '../components/Footer'
useNavigate
ChangePassword
useGetLoggedUserQuery
NavLink


function Dashboard() {
  const handleLogout=()=>{
    dispatch(unSetUserInfo({name:"", email:""}))
    dispatch(unSetUserToken({access_token:null}))
    removeToken()
    navigate('/login')
  }
  const handleHomePage=()=>{
    navigate('/')
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {access_token} = getToken()
  const {data, isSuccess} = useGetLoggedUserQuery(access_token)
  // console.log(data)
  const [userData, setUserData] = useState({
    email:"",
    name:"",
  })

  // Store user Data in local State
  useEffect(() => {
    if (data && isSuccess){
      setUserData({
        email:data.email,
        name:data.name,
      })
    }
  }, [data, isSuccess])

  // Store user Data in Redux Store
  
  useEffect(()=>{
    if(data&& isSuccess){
      dispatch(setUserInfo({
        email:data.email,
        name:data.name,
      }))
    }
  }, [data, isSuccess, dispatch])


  return (
    <>
    <Grid height='90vh'>
      <CssBaseline />
      <Grid container >
        <Grid item sm={4} sx={{backgroundColor:'gray', p:5, color:'white'}}>
          <h1>Dashboard</h1> 
          <h6 ><Button style={{color:'white'}} onClick={handleHomePage}>Home</Button> </h6>
          <Typography variant='h5'>
            Email: {userData.email}
          </Typography>
          <Typography variant='h6'>
            Name: {userData.name}
          </Typography>
          <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt:8}}>Logout</Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>

      </Grid>
      </Grid>
     <Footer/>
    </>
  )
}

export default Dashboard
