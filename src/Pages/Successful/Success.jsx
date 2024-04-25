import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import Book from '../../Images/Book.png'


function Success() {
  return (
    <Grid container sx={{flexDirection:'column',alignItems:'center',m:2}}>
        <Grid item>
            <img src={Book } alt='order-success' height={'200px'}/>
        </Grid>
        <Grid item>
            <Typography variant="body1" color="initial" sx={{textAlign:'center',fontSize:18}} component='div'>
                hurray!!!your order is confirmed
                <Typography variant="body1" color="initial" sx={{fontSize:18}} component='div'>
                    the order id is #123456 save the order id for <br />
                    further communication
                </Typography>
            </Typography>
        </Grid>
        <Grid item sx={{my:5}}>
            <table style={{borderCollapse:'collapse',borderColor:'#DCDCDC',border:'1px solid #DCDCDC'}}>
                <thead>
                        <tr style={{textAlign:'center'}}>
                            <td style={{padding:10,borderRight:'none'}}>Email us</td>
                            <td style={{padding:10,borderRight:'none'}}>Contact us</td>
                            <td style={{padding:10}}>Address</td>
                        </tr>
                </thead>
                <tbody>
                    <tr style={{verticalAlign:'top'}}>
                        <td style={{padding:30,border:'1px solid #DCDCDC'}}>admin@bookstore.com</td>
                        <td style={{padding:30,border:'1px solid #DCDCDC'}}>+918839768937</td>
                        <td style={{padding:30,width:350,border:'1px solid #DCDCDC'}}>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                    </tr>
                </tbody>
            </table>
        </Grid>
        
    </Grid>
  )
}

export default Success