import { Divider, Grid, Typography,Breadcrumbs } from '@mui/material'
import React, { useEffect, useState,useRef } from 'react'
import CartItem from '../../Components/Cart/CartItem';



function MyWishlist() {
    const [data,setData] = useState([]);
    

    
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb" sx={{mx:'11%',my:2}}>
      <a href='/'  sx={{textDecoration:'none',color:'#9D9D9D'}}>
          Home
      </a>
      <Typography color="text.primary">My Wishlist</Typography>
    </Breadcrumbs>
    <Grid sx={{my:4,mx:{xs:1,sm:5,md:19}}}>
        <Grid container sx={{border:'1px solid #E4E4E4',minWidth:350}}>
            <Grid item sx={{backgroundColor:'#F5F5F5',px:4,py:2}} xs={12}>
                <Typography variant="h5" color="initial">My Wishlist</Typography>
            </Grid>
            <Grid item sx={{width:'100%'}}>
                
                   
                        <div  >
                            <div style={{padding:40}}>
                                <CartItem />
                            </div>
                            <Divider></Divider>
                        </div>
                    
                
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}

export default MyWishlist