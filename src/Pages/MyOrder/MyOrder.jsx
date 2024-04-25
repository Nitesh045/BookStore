import { Grid,Typography,Breadcrumbs } from '@mui/material'
import React from 'react'
import Book from '../../Images/Book.png'
import CircleIcon from '@mui/icons-material/Circle';


function MyOrder() {
  return (
    <>
        <Breadcrumbs aria-label="breadcrumb" sx={{mx:'11%',my:2}}>
        <a href='/'  sx={{textDecoration:'none',color:'#9D9D9D'}}>
            Home
        </a>
        <Typography color="text.primary">My Orders</Typography>
        </Breadcrumbs>
        <Grid sx={{my:4,mx:{xs:1,sm:5,md:19}}}>
            <Grid container sx={{border:'1px solid #DCDCDC',justifyContent:'space-between',alignItems:'flex-start',p:2,minWidth:375,flexWrap:'nowrap'}}>
                <Grid item sx={{display:'flex'}}>
                    <Grid item>
                        <img src={Book} alt='book' style={{height:85,objectFit:'contain'}}/>
                    </Grid>
                    <Grid item sx={{marginLeft:5}}>
                        <Grid item>
                            <Typography variant="h6" color="initial" sx={{fontWeight:'bold',lineHeight:1}}>Don't Make Me Think</Typography>
                            <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D',marginTop:2,marginBottom:1}}>by Steve Krug</Typography>
                            <Typography component='div' variant="body1" color="initial" sx={{display:'flex',fontSize:15,alignItems:'center',fontWeight:'bold'}}>
                                Rs. 1500 
                                <Typography sx={{fontSize:12,textDecoration:'line-through',color:'#9D9D9D',mx:2}}>Rs.2000</Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography component='div' variant="body1" color="initial" sx={{display:'flex',alignItems:'center',fontWeight:'bold'}}>
                        <CircleIcon style={{fontSize:10,color:'#26A541',margin:3}}/>
                        Order Placed on May 21
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default MyOrder