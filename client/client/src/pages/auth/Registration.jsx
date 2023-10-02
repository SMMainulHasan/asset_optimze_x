import React, { useState } from 'react'
import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography, CircularProgress } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
useNavigate
import { useRegisterUserMutation } from '../../services/userAuthApi'
import { storeToken } from '../../services/LocalStorgeService'
CircularProgress
NavLink

function Registration() {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [registerUser, {isLoading}]= useRegisterUserMutation() 
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData= {
      name: data.get('name'),
      email: data.get('email'),
      phone_number: data.get('phone_number'),
      password: data.get('password'),
      password2: data.get('password2'),
      tc: data.get('tc'),
    }
    const res = await registerUser(actualData)
    if(res.error){
      // console.log(typeof(res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if(res.data){
      console.log(typeof(res.data))
      console.log(res.data)
      storeToken(res.data.token)
      navigate('/dashboard')
    }
  }
  return (
    <>
    {/* {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.name ? console.log(server_error.name[0]) : ""}
    {server_error.email ? console.log(server_error.email[0]) : ""}
    {server_error.phone_number ? console.log(server_error.phone_number[0]) : ""}

    {server_error.password? console.log(server_error.password[0]) : ""}
    {server_error.password2 ? console.log(server_error.password2[0]) : ""}
    {server_error.tc ? console.log(server_error.tc[0]) : ""} */}

<Box component='form' noValidate sx={{mt:1}} id='login-form' onSubmit={handleSubmit}>

    
      <TextField margin='normal' required fullWidth id='name' name='name' label='Enter Your Name'  />
      {server_error.name ? <Typography style={{fontSize:12, color:'red'}}>{server_error.name[0]}</Typography>:""}
    
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address'  />
      {server_error.email ? <Typography style={{fontSize:12, color:'red'}}>{server_error.email[0]}</Typography>:""}

      <TextField margin='normal' required fullWidth id='phone_number' name='phone_number' label='Enter Your Phone Number'  />
      {server_error.phone_number ? <Typography style={{fontSize:12, color:'red'}}>{server_error.phone_number[0]}</Typography>:""}


      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password'  />
      {server_error.password ? <Typography style={{fontSize:12, color:'red'}}>{server_error.password[0]}</Typography>:""}

      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password'  />
      {server_error.password2 ? <Typography style={{fontSize:12, color:'red'}}>{server_error.password2[0]}</Typography>:""}

      <FormControlLabel control={<Checkbox value={true}color='primary' name='tc' id='tc' />} label="I agree to term and condition." />
      {server_error.tc ? <span style={{fontSize:12, color:'red'}}>{server_error.tc[0]}</span>:""}

     <Box textAlign='center'>
      {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Register</Button>}
     </Box>
     

     {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert>:''}
     </Box>


         {/* <Box component='form' noValidate sx={{mt:1}} id='registration-form' onSubmit={handleSubmit}>
      
         <TextField margin='normal' required fullWidth id='name' name='name' label='Enter Your Name'  />
         {server_error.name ? <Typography style={{fontSize:12, color:'red'}}>{server_error.name[0]}</Typography>:""}

      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' type='email' />
      {server_error.email ? <Typography style={{fontSize:12, color:'red'}}>{server_error.email[0]}</Typography>:""}

      <TextField margin='normal' required fullWidth id='phone_number' name='phone_number' label='Enter Your Number'  type='number' />
      {server_error.phone_number ? <Typography style={{fontSize:12, color:'red'}}>{server_error.phone_number[0]}</Typography>:""}

      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password'  />
      {server_error.password ? <Typography style={{fontSize:12, color:'red'}}>{server_error.password[0]}</Typography>:""}

      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password'  />
      {server_error.password2 ? <Typography style={{fontSize:12, color:'red'}}>{server_error.password2[0]}</Typography>:""}

      <FormControlLabel control={<Checkbox value={true}color='primary' name='tc' id='tc' />} label="I agree to term and condition." />
      {server_error.tc ? <span style={{fontSize:12, color:'red'}}>{server_error.tc[0]}</span>:""}

     <Box textAlign='center'>
      <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Register</Button>
     </Box>
     {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert>:''}
     </Box> */}
    </>
  )
}

export default Registration