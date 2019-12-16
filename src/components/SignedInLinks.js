import React from 'react'
import {NavLink} from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {signOut} from '../store/actions/authAction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },

    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color:'#12AFC0'
    },
    inputRoot: {
      color: '#12AFC0',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      color:'#12AFC0',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },


  }));



const SignedInLinks =(props)=>{
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = event=>{
        setAnchorEl(event.currentTarget);
    }
    const handleLogout = () => {
        props.signOut()
      };

    if(props.auth.auth.isLogout) return <Redirect to="/" />
    return(
        <Box className="container" display="flex" style={{alignItems:'center'}}>
            <Box p={1} order={3} style={{color:'red'}}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            </Box>
            <Box p={1} mx={5} order={3} style={{color:'#12AFC0',display:'flex'}}>
                <ShoppingCartIcon style={{fontSize:30}}/>
            </Box>
            <Box p={1} order={3} style={{color:'#12AFC0'}}>
                <Avatar alt="Remy Sharp" src="/broken-image.jpg" aria-controls="simple-menu" aria-haspopup="true" className={classes.orange} onClick={handleClick}>
                    B
                </Avatar>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleLogout}
                >
                    {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem> */}
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
                
            </Box>
        </Box>
    )
}

const mapStateToProps = (state)=>{
  console.log(state)
  return{
    auth:state
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    signOut:()=>dispatch(signOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)