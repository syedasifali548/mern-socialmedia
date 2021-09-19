import { Avatar, Container, Paper, Typography,Grid, Button } from '@material-ui/core';
import React,{useState} from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'
import { GoogleLogin } from 'react-google-login'
import Icon from './icon' 
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import {signup , signin} from '../../actions/auth'

const initialState = {firstName:'',lastName:'',email:'',password:'',confirmPassword:''}
const Auth = ()=>{
    const classes = useStyles();
    const [showPassword,setShowPassword] = useState(false)
    const [isSignup,setIsSignup] = useState(false)
    const [formData,setFormData] = useState(initialState)
    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit =(e)=>{
      e.preventDefault();
      isSignup ? dispatch(signup(formData,history)) 
      :
      (dispatch(signin(formData,history)))
     }
    const handleChange =(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const switchMode =()=>{
      setIsSignup((prevIsSignup)=>!prevIsSignup)
      handleShowPassword(false)
    }
    const handleShowPassword =()=>setShowPassword((prevShowPassword)=> !prevShowPassword)

    const googleSuccess = async (res)=>{
     const result = res?.profileObj;
     const token = res?.tokenId;
     try {
      dispatch({type:'AUTH',data:{result,token}})
       history.push('/')
     } catch (error) {
      console.log(error);
     }
    }


    const googleFailure =(error)=>{
      console.log(error);
     console.log("Google login is unsuccessfull.Try again Later!  "); 
    }
    return(
       <Container component='main' maxWidth='xs'>
       <Paper className={classes.paper} elevation={3}>
       <Avatar className={classes.avatar}>
       <LockOutlinedIcon/>
       </Avatar>
       <Typography variant='h6'>{isSignup ? 'Sign Up': 'Sign In'}</Typography>
       <form className={classes.form} onSubmit={handleSubmit}>
         <Grid container spacing={2}>
         {
          isSignup && (
            <>
            
            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />

            </>
          )}
          <Input name='email' label='Email Address' handleChange={handleChange}  type='email'/>
          <Input name='password' label='Password '
           handleChange={handleChange}  
          type={showPassword  ? 'text' : 'password'} 
          handleShowPassword={handleShowPassword}/>
          {isSignup && <Input name="ConfirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
         </Grid>

         <Button className={classes.submit} type="submit" variant="contained" color="primary" fullWidth >
         {isSignup ? 'Sign Up' : 'Sign In'} 
         </Button> 

         <GoogleLogin 
         clientId="858750826022-dprlhhcnse64dgminbn3vo7evl289fcm.apps.googleusercontent.com"
         render={(renderProps)=>(
           <Button
           className={classes.googleButton}
           color="primary"
           fullWidth
           onClick={renderProps.onClick}
           disabled={renderProps.disabled}
           startIcon={<Icon/>}
           variant="contained">Google Sign In</Button>
         )}
         onSuccess={googleSuccess}
         onFailure={googleFailure}
         cookiePolicy="single_host_origin"
         />
        
         <Grid container>
            <Grid item>  
            <Button onClick={switchMode}>
            {isSignup ? 'Already have an account ? Sign In':'Dont have an account? Sign Up'}
            </Button>
          </Grid>
         </Grid>
       </form>
       </Paper>
       </Container>

    )
}
export default Auth;