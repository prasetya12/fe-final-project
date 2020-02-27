import React from 'react'
import {NavLink} from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {signOut} from '../store/actions/authAction'
import {connect} from 'react-redux'
import {Redirect,Link} from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import {url} from '../constant/const'

const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    orange:{
      cursor:'pointer'
    }

  }));

  
  const menuId = 'primary-search-account-menu';
  

const SignedInLinks =(props)=>{
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleClick = event=>{
        setAnchorEl(event.currentTarget);
    }
    const handleLogout = () => {
        props.signOut()
      };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <a href="/admin" style={{textDecoration:'none',color:'inherit'}}>
            <MenuItem onClick={handleMenuClose}>Admin Panel</MenuItem>

          </a>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      );
    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };
    
    


    if(props.auth.auth.isLogout) return <Redirect to="/" />
    return(
        <Box className="container" display="flex" style={{alignItems:'center'}}>
            <Box p={1} mx={5} order={3} style={{color:'#4288CC',display:'flex'}}>
              <Link to="/cart/2" style={{color:'#4288CC'}}>
                <ShoppingCartIcon style={{fontSize:30}}/>
              </Link>
            </Box>
            <Box p={1} order={3} style={{color:'#12AFC0'}}>
            
              
                <Avatar alt="Remy Sharp" src="/broken-image.jpg" aria-controls={menuId} aria-haspopup="true" className={classes.orange} onClick={handleProfileMenuOpen}>
                    B
                </Avatar>
                {/*<Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleLogout}
                >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu> */}
                {renderMenu}
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