import React, { useState } from 'react'
useState
import {Grid, Card, Typography, Tabs, Tab, Box} from '@mui/material'
import {ShoppingBag} from '@mui/icons-material'
import Pic1 from '../../images/login.png'
import UserLogin from './UserLogin'
import Registration from './Registration'
UserLogin
Registration

const TabPanel = (props)=>{
  const {children, value, index}=props;
  return(
    <div role='tabpanel' hidden={value !== index}>{
      value === index && (
        <Box>{children}</Box>
      )
    }

    </div>
  )
}

function LoginReg() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue)=>{
    setValue(newValue);
  }
  
  return (
    <>
      <Grid container sx={{height:'100vh', justifyContent:'center'}}>
        {/* <Grid item lg={7} sm={5} sx={{
          backgroundImage:`url(${Pic1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', 
          backgroundPosition:'center',
          display: {xs:'none', sm:'block'}
        }}>     
        </Grid> */}

        <Grid item >
         <Card sx={{width:'100%', height:'100%'}}>
          <Box sx={{ height:'70vh', width:'450px'}}>
            <Box sx={{borderBottom:1, borderColor:'divider'}}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                <Tab label="Login" sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                <Tab label='Registration' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
              </Tabs>
              
            </Box>
            <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
            <TabPanel value={value} index={1}>
                 <Registration />
              </TabPanel>
          </Box>
          {/* <Box textAlign='center' sx={{mt:2}}>
           <ShoppingBag sx={{color:'purple', fontSize:100}} />
           <Typography variant='h5' sx={{fontWeight:'bold'}}>assetOptimzeX</Typography>
          </Box> */}
         </Card>
        </Grid>
 
      </Grid>
    </>
  )
}

export default LoginReg