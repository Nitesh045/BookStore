import { Divider, Grid, Typography,Breadcrumbs } from '@mui/material'
import React, { useEffect, useState,useRef } from 'react'

import { Link } from 'react-router-dom'
import { getWishList } from '../../Services/DataServices';
import CartItem from '../../Components/Cart/CartItem';

function MyWishlist() {
    const [data,setData] = useState([]);
    const getWishlistData = async() =>{
        let response = await getWishList();
        console.log('wishlist',response)
        setData(response.data.result.filter(item => item.product_id !== null))
    }

    useEffect(()=> {
        getWishlistData();
    },[])
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb" sx={{mx:'11%',my:2}}>
      <Link to='/' sx={{textDecoration:'none',color:'#9D9D9D'}}>
          Home
      </Link>
      <Typography color="text.primary">My Wishlist</Typography>
    </Breadcrumbs>
    <Grid sx={{my:4,mx:{xs:1,sm:5,md:19}}}>
        <Grid container sx={{border:'1px solid #E4E4E4',minWidth:350}}>
            <Grid item sx={{backgroundColor:'#F5F5F5',px:4,py:2}} xs={12}>
                <Typography variant="h5" color="initial">My Wishlist({data.length})</Typography>
            </Grid>
            <Grid item sx={{width:'100%'}}>
                {data.map(item => {
                    return (
                        <div key={item._id} >
                            <div style={{padding:40}}>
                                <CartItem data={item} getCartItem={getWishlistData} myRef={useRef}/>
                            </div>
                            <Divider></Divider>
                        </div>
                    )
                })}
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}

export default MyWishlist