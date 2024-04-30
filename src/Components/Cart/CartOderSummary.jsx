import React, { useRef, useState } from 'react'
import { Grid, Typography, Button} from '@mui/material'
import CartItem from './CartItem';

import {useNavigate} from 'react-router-dom';
import { orderItems, removeCartItem } from '../../Services/DataServices';


function CartOrderSummary({data,toggleOrderSummary,getCartItem}) {
    const [orders,setOrders] = useState({orders:[]});
    const myRef = useRef(true);
    const navigate = useNavigate();
    const onCheckOut = async(data) => {
        const newOrderItems = data.map((item) => ({
            product_id: item.product_id._id,
            product_name: item.product_id.bookName,
            product_quantity: item.quantityToBuy,
            product_price: item.product_id.discountPrice
        }));
    
        setOrders((prevOrders) => ({
            ...prevOrders,
            orders: [...prevOrders.orders, ...newOrderItems],
        }),
        console.log('orders:',orders),
        await orderItems(orders),
        data.map(async (item) => {
          await removeCartItem(item._id)
        }),
        getCartItem(),
        );      
        navigate('/success')
    }
  return (
    <Grid container sx={{flexDirection:'column',border:'1px solid #DCDCDC',py:{xs:0,sm:2},px:{xs:0,sm:3},minWidth:360}}>
        <Grid item sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',p:1,px:3}}>
            <Typography variant="h6" color="initial" sx={{fontWeight:'bold'}}>Order Summary</Typography>
        </Grid>
        {toggleOrderSummary && (
            <Grid item sx={{p:1,px:3}}>
                <Grid container sx={{flexDirection:'column',gap:1}}>
                    <Grid item sx={{display:'flex',flexDirection:'column'}}>
                        {data.map(item => (
                            <CartItem  key={item._id} data={item} getCartItem={getCartItem} myRef={myRef}/>
                        ))}
                    </Grid>
                    <Grid item sx={{alignSelf:'end'}}>
                        <Button variant="contained" sx={{width:150}} onClick={()=> onCheckOut(data)}>
                            Checkout
                        </Button>
                    </Grid>
                </Grid>            
            </Grid>
        )}
    </Grid>
  )
}

export default CartOrderSummary