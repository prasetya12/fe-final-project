import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box'
import { makeStyles,fade } from '@material-ui/core/styles';
import Signout from '../components/SignedOutLinks'
import Signin from '../components/SignedInLinks'
import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { grey } from '@material-ui/core/colors';
import classNames from 'classnames'





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
      color:'#4288CC'
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
    containerSearch:{
        flexGrow:7
    },
    inputRoot: {
        color: '#4288CC',
        width:'50%',
        borderColor:'#4288CC',
        borderWidth:1,
        height:50,
        // backgroundColor:'red'
        
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '50%',
        color:'#4288CC',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        borderWidth: 0,
        borderColor: '#4288CC',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
    },
    searchIcon: {
        marginLeft:20,
        width: theme.spacing(-10),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'#4288CC'
    },
    inputSearch:{
        color:'secondary'
    },
    tryClass:{
        backgroundColor:'blue'
    },
    toolBar:{
        paddingRight:100,
        paddingLeft:100,
        backgroundColor:'white'
    },
    notchedOutline :{
        borderWidth:"1px",
        borderColor:"yellow !important"
    },
    inputFocus:{
        borderWidth:"1px",
        borderColor:"grey !important"
    }
  }));

export default function Navbar(){
    const classes = useStyles();
    return(
        <div>
            <AppBar  position="fixed">
                <Toolbar className={classes.toolBar}>
                    <Box  className={classes.containerButton}>
                        <IconButton edge="start" className={classes.menuButton} href="/" aria-label="menu">
                            BookFair
                        </IconButton>
                    </Box>
                    <Box className={classes.containerSearch}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                            </div>
                            <OutlinedInput className={classes.inputSearch}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                focused:classes.inputFocus
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Box>
                    
                    {/* <div className={classes.link} style={{flex:1,backgroundColor:'red',flexDirection:'row-reverse'}}>
                        <Button color="inherit" href="/login">Login</Button>
                        
                    </div> */}
                    <Box display="flex" justifyContent="flex-end" m={1} p={1}style={{backgroundColor:'transparent'}}>
                    <Signin/> 
                        {/* {window.localStorage.getItem('token')!=null?<Signin/>:<Signout/>} */}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
} 