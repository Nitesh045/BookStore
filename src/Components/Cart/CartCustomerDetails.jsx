import React, { useState } from 'react'
import { Grid, Typography, TextField, FormControl, Button, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material'


function CartCustomerDetails() {
    const [customerDetails,setCustomerDetails] = useState({
        addressType: "Home",
        fullAddress: "Plot no.13, Bhallar township, nagpur",
        city: "Mumbai",
        state: "Maharastra"
    })

    const handleChange = (e) => {
        setCustomerDetails(prev => ({
            ...prev,
            [e.target.id] : e.target.value
        }))
    }
    
    const handleAddressTypeChange = (e) => {
        setCustomerDetails((prev) => ({
          ...prev,
          addressType: e.target.value,
        }));
    };

  return (
    <Grid container sx={{flexDirection:'column',border:'1px solid #DCDCDC',py:{xs:0,sm:2},px:{xs:0,sm:3},minWidth:360}}>
        <Grid item sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',p:1,px:3}}>
            <Typography variant="h6" color="initial" sx={{fontWeight:'bold'}} component={'div'}>Customer Details</Typography>
            
                <Button variant="outlined" sx={{textTransform:'none',color:'#A03037',borderColor:'#A03037','&:hover':{color:'#A03037',borderColor:'#A03037'}}}>
                    Add New Address
                </Button>
            
        </Grid>
       
            <Grid item sx={{p:1,px:3}}>
                <Grid container sx={{flexDirection:'column',gap:1}}>
                    <Grid item sx={{display:'flex',gap:1,flexWrap:'wrap'}}>
                        <FormControl sx={{width:{xs:'100%',sm:'35%'}}}>
                            <FormLabel htmlFor="fullname">FullName</FormLabel>
                            <TextField inputProps={{style:{padding:5}}} id="fullname" fullWidth/>
                        </FormControl>
                        <FormControl sx={{width:{xs:'100%',sm:'35%'}}}>
                            <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>
                            <TextField type='phone' inputProps={{style:{padding:5}}} id="mobileNumber" fullWidth/>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl sx={{width:{xs:'100%',sm:'71.5%'}}}>
                            <FormLabel htmlFor="address">Address</FormLabel>
                            <TextField  id="fullAddress" 
                            multiline 
                            rows={2} 
                            value={customerDetails.fullAddress}
                            onChange={handleChange}
                            fullWidth
                            />
                        </FormControl>
                    </Grid>
                    <Grid item sx={{display:'flex',gap:1,flexWrap:'wrap'}}>
                        <FormControl sx={{width:{xs:'100%',sm:'35%'}}}>
                            <FormLabel htmlFor="city">city/town</FormLabel>
                            <TextField inputProps={{style:{padding:5}}} id="city" 
                            value={customerDetails.city}
                            onChange={handleChange}
                            fullWidth
                            />
                        </FormControl>
                        <FormControl sx={{width:{xs:'100%',sm:'35%'}}}>
                            <FormLabel htmlFor="state">State</FormLabel>
                            <TextField inputProps={{style:{padding:5}}} id="state" 
                            value={customerDetails.state} 
                            onChange={handleChange}
                            fullWidth
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl sx={{width:'100%'}}>
                            <FormLabel id="addressType" sx={{color:'#666666'}}>Type</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="addressType"
                                name="row-radio-buttons-group"
                                value={customerDetails.addressType}
                                onChange={handleAddressTypeChange}
                                id='addressType'
                            >
                                <FormControlLabel value="Home" control={<Radio />} label="Home" />
                                <FormControlLabel value="Work" control={<Radio />} label="Work" />
                                <FormControlLabel value="Other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Button variant="contained" sx={{alignSelf:'end',width:150}} >
                        Continue
                    </Button>
                </Grid>            
            </Grid>
        
    </Grid>
 )
}

export default CartCustomerDetails  