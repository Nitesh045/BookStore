import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import { Container, Grid} from '@mui/material'


import SignCombinedImage from '../../Images/SignCombined.png'
import Signup from './SingUp'
import { Login } from './Login'
import './BothPage.css'

function SignCombined() {
    const[page,changePage]=useState(true)
    useEffect(()=> {
        if(window.location.href.includes('login')){
            changePage(!page)
        } else if(window.location.href.includes('signup')) {
            changePage(!page)
        }
    },[])
    console.log(page)

  return (
    <Container maxWidth='xl' className='combinePage'>
        <Grid container sx={{justifyContent:'center',my:10}} className='signform'>
            <Grid item sx={{display:{xs:'none',md:'flex'}}}>
                <Paper sx={{marginTop:2,width:300,height:391,borderRadius:'21px 0px 0px 21px',display:'flex',flexDirection:'column',justifyContent:'center',paddingLeft:5}} elevation={5}>
                    <img src={SignCombinedImage} alt="" srcSet="" style={{width:'245px',borderRadius:'50%'}}/>
                    <p style={{fontWeight:'bold',textTransform:'uppercase',paddingLeft:'35px'}}>Online Book Shopping</p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper sx={{ width:389, height:425,borderRadius:6}} elevation={5}>
                    {page? (<Signup changePage={changePage}/>) : (<Login changePage={changePage}/>)}
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}

export default SignCombined