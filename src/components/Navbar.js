import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import Signout from '../components/SignedOutLinks'
import Signin from '../components/SignedInLinks'




const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    containerButton:{
        flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      flexGrow: 1,
      justifyContent:'flex-start',
      color:'#12AFC0'
    },
    toolBar:{
        backgroundColor:"white"
    },
    link:{
        flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Navbar(){
    const classes = useStyles();
    console.log(window.localStorage.getItem('token'))
    return(
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar style={{paddingRight:100,paddingLeft:100,backgroundColor:'white'}}>
                    <Box  className={classes.containerButton}>
                        <IconButton edge="start" className={classes.menuButton} href="/" aria-label="menu">
                            BookFair
                        </IconButton>
                    </Box>
                    
                    {/* <div className={classes.link} style={{flex:1,backgroundColor:'red',flexDirection:'row-reverse'}}>
                        <Button color="inherit" href="/login">Login</Button>
                        
                    </div> */}
                    <Box display="flex" justifyContent="flex-end" m={1} p={1}style={{backgroundColor:'transparent'}}>
                        {window.localStorage.getItem('token')!=null?<Signin/>:<Signout/>}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
} 