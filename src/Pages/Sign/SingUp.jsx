import React, { useState } from 'react'
import { TextField, Grid, Button, Link} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Login.css';



function Signup({changePage}) {
    const [showPassword, setShowPassword] = useState(false);
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]*$/;
    const passRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/
    const phoneRegex = /^(\+91|0)?[6789]\d{9}$/
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleMouseDownPassword = () => {

    }
    const [data,setData] = useState({
        fullName: '',
        email: '',
        password:'', 
        phone:''
    })

    const [checkError, setCheckError] = useState({
        fullNameTrue: false,
        fullNameError:"",
        EmailTrue: false,
        EmailError: '',
        PasswordTrue: false,
        PasswordError: '',
        phoneTrue:false,
        phoneError:''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value 
        })
    }

    
    const onSignUp = async() =>{ 
        let emailTest = emailRegex.test(data.email)
        let passwordTest = passRegex.test(data.password)
        let phoneTest = phoneRegex.test(data.phone)
        // localStorage.setItem('token',response.data.id)
        if(emailTest === false) {
            setCheckError({
                EmailTrue:true,
                EmailError: 'Enter Valid Email'
            })
        }   else if(passwordTest === false) {
            setCheckError({
                PasswordTrue:true,
                PasswordError: 'The Password must contain atleast 8 characters,One UppercaseLetter,One LowercaseLetter,One number and Special Character'
            })
        } else if(phoneTest === false) {
            setCheckError({
                phoneTrue:true,
                phoneError: 'Please Enter Valid Phone number'
            })
        }
        // if(emailTest && passwordTest && phoneTest === true) {
        //     if(window.location.href.includes('signup')) {
        //         let response = await userSignUp(data)
        //         console.log(response)
        //         // return window.location.reload();
        //     } else if(window.location.href.includes('admin-signup')) {
        //         let response = await adminUserSignup(data)
        //         console.log(response)
        //         // return window.location.reload();
        //     }
        // }
    }
    
    return (
        <Grid container sx={{ justifyContent: 'center', gap: 2, flexDirection: 'column', alignItems: 'center',py:2}}>
            <Grid container sx={{ justifyContent: 'center', gap: 12 }}>
                <Grid item onClick={()=> {changePage(false)}} className='Login-link'> 
                    <Link  to={window.location.href.includes('admin-signup') ? '/admin-login' : '/signin'} sx={{textDecoration:'none', fontSize: '25px', color: '#878787',fontWeight:'bold'}}>                
                        LOGIN
                    </Link>
                </Grid>
                <Grid item className='Signup-link active'>
                    <Link sx={{ fontSize: '25px', color: '#0A0102',fontWeight:'bold',textDecoration:'none'}}>
                        SIGNUP
                    </Link>
                </Grid>
            </Grid>
            <Grid item>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ fontSize: '10px' }}>Full Name</label>
                    <TextField
                        id="fullName"
                        sx={{ width: '252px', height: '35px' }}
                        inputProps={{
                            style: {
                                padding: 6
                            }
                        }}
                        value={data.fullName}
                        onChange={handleChange}
                        // error={checkError.fullNameTrue}
                        // helperText={checkError.fullNameError}
                    />
                </div>
            </Grid>
            <Grid item>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ fontSize: '10px' }} htmlFor='email'>Email Id</label>
                    <TextField
                        id="email"
                        name='email'
                        sx={{ width: '252px', height: '35px' }}
                        inputProps={{
                            style: {
                                padding: 6
                            }
                        }}
                        value={data.email}
                        onChange={handleChange}
                        error={checkError.EmailTrue}
                    />
                    {checkError.EmailTrue && (
                        <div style={{ fontSize: '12px', color: 'red' }}>{checkError.EmailError}</div>
                    )}
                </div>
            </Grid>
            <Grid item sx={{marginTop:'3px',marginBottom:'14px'}}>
                <FormControl sx={{ m: 1, width: '252px', height: '35px' }} variant="outlined">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <label style={{ fontSize: '10px' }} htmlFor='passwordInput'>Password</label>
                        <OutlinedInput
                            value={data.password}
                            onChange={handleChange}
                            error={checkError.PasswordTrue}
                            id="password"
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            inputProps={{
                                style: {
                                    padding: 6
                                }
                            }}
                        />
                        {checkError.PasswordTrue && (
                            <div style={{ fontSize: '12px', color: 'red' }}>{checkError.PasswordError}</div>
                        )}
                    </div>
                </FormControl>
            </Grid>
            <Grid item>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ fontSize: '10px' }}>Mobile Number</label>
                    <TextField
                        id="phone"
                        sx={{ width: '252px', height: '35px' }}
                        inputProps={{
                            style: {
                                padding: 6
                            }
                        }}
                        value={data.phone}
                        onChange={handleChange}
                        error={checkError.phoneTrue}
                    />
                    {checkError.phoneTrue && (
                        <div style={{ fontSize: '12px', color: 'red' }}>{checkError.phoneError}</div>
                    )}
                </div>
            </Grid>
            <Grid item>
                <Button variant='contained' sx={{ width: '252px', backgroundColor: '#A03037' }} onClick={onSignUp}>
                    Signup
                </Button>
            </Grid>
        </Grid>

    )
}

export default Signup