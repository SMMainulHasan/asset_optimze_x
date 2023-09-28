import { Box, AppBar, Toolbar,Typography, Button } from "@mui/material"

const Footer = () => {
  return (
    <Box sx={{flexGrow:1}}>
    <AppBar position="static" color="secondary" style={{backgroundColor:'black'}}>
      <Toolbar >
        {/* <Typography variant='h5' component="div" sx={{flexGrow:1}}> */}
       

      <Typography>Copyright © 2023 assetOptimzeX.com</Typography>
     
  
      </Toolbar>

    </AppBar>
 </Box>

  )
}

export default Footer