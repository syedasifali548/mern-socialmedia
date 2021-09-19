import {AppBar,Avatar,Toolbar,Typography,Button} from '@material-ui/core'
import logo from '../../images/logo.png';
import useStyles from './styles'
import {Link, useHistory, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import * actionTypes from '../../constant/actionTypes'  

const Navbar = () =>{
   const classes = useStyles();
   const history = useHistory();
   const dispatch = useDispatch();
   const location = useLocation();

   const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
   console.log(user)
  
   const logout =()=>{
      dispatch({type:'LOGOUT'});
      history.push('/')
      setUser(null)
   }

   useEffect(() => {
      const token = user?.token;
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    return(
        <AppBar position="static" color="inherit" className={classes.appBar}>
        <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h4" align="center"
         component={Link} 
         to='/'
        >Memories</Typography>
         <img src={logo} className={classes.image} alt="memories" height="60"/>
        </div>
        <Toolbar className={classes.toolbar}>
         {user ? (
            <div className={classes.profile} >
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
             <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
             <Button className={classes.logout} variant='contained' color='secondary' onClick={logout}>Logout</Button>
            </div>
         ):(
            <Button component={Link} to='/auth' variant='contained' color='primary'>Sign in</Button>

         )}
         </Toolbar>
        </AppBar>
    );
}
export default Navbar;