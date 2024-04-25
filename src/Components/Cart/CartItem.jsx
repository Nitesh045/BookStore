import React from 'react'
import { Grid, Typography} from '@mui/material'
import Book from '../../Images/Book.png'


import DeleteIcon from '@mui/icons-material/Delete';

function CartItem() {
    // console.log('cartItem',data)
    
  return (
    <Grid container sx={{my:1,justifyContent:'space-between'}}>
        <Grid item sx={{display:'flex',alignItems:'flex-start'}} xs={12}>
            <Grid item>
                <img src={Book} alt='book' style={{height:85,objectFit:'contain'}}/>
            </Grid>
            <Grid item sx={{marginLeft:5}} xs={10}>
                <Grid item>
                    <Typography variant="h6" color="initial" sx={{fontWeight:'bold',lineHeight:1,display:'flex'}}>Nitesh </Typography>
                    <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D',marginTop:2,marginBottom:1}}>Nitesh</Typography>
                   
                        <Typography variant="body1" color="initial" component={'div'} sx={{display:'flex',fontSize:15,alignItems:'center',fontWeight:'bold'}}>
                            Rs. 1400
                            <Typography sx={{fontSize:12,textDecoration:'line-through',color:'#9D9D9D',mx:2}}>Rs.2000</Typography>
                        </Typography>
                    
                    
                </Grid>
                
                 
                    <Grid item sx={{display:'flex',alignItems:'center',marginTop:1,flexWrap:'nowrap'}}>
                        
                        <Typography  variant="body1" color="initial" sx={{mx:{xs:1,sm:2},cursor:'pointer'}} >Remove</Typography>
                    </Grid>
                 
                
            </Grid>
           
                              
                    {/* <Grid item> 
                        <DeleteIcon  sx={{cursor:'pointer'}} />
                    </Grid> */}
                
            
        </Grid>
    </Grid>
  )
}

export default CartItem