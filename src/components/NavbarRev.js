import React from 'react';
import {makeStyles, fade} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/blueGrey';
import Signin from '../components/SignedInLinks'




const prim = red[500];
const sec = grey[700];


const useStyles = makeStyles(theme=>({
    grow:{
        flexGrow:1,
    },
    title:{
        color:'#4288CC'
    },
    search:{
        position:'relative',
        borderRadius:theme.shape.borderRadius,
        // backgroundColor:fade(prim,0.15),
        // '&:hover':{
        //     backgroundColor:fade(prim,0.25)
        // },
        marginRight:theme.spacing(2),
        marginLeft:0,
        width:'100%',
        
    },
    searchIcon:{
        width:theme.spacing(7),
        height:'100%',
        position:'absolute',
        pointerEvents:'none',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    inputRoot:{
        color:'inherit'
    },
    inputInput:{
        padding:theme.spacing(2,1,2,7),
        transition:theme.transitions.create('width'),
        width:'100%',
        height:'100%',
        color:sec,
        [theme.breakpoints.up('md')]:{
            width:200
        }
    },
    toolbar:{
        [theme.breakpoints.up('md')]:{
            marginLeft:130,
            marginRight:130
        }
    },
    sectionDesktop:{
        display:'none',
        [theme.breakpoints.up('md')]:{
            display:'flex'
        }
        
    },
    sectionMobile:{
        display:'flex',
        [theme.breakpoints.up('md')]:{
            display:'none'
        }
    },
    menuNavbar:{
        flexGrow:1,
        justifyContent:'flex-end',
        display:'flex'
    }
}))


export default function NavbarRev(){
    const classes = useStyles();


    return(
        <div className={classes.grow}>
            <AppBar position="fixed" color='inherit'>
                <Toolbar className={classes.toolbar}>
                    <a href='/' style={{textDecoration:'none'}}>
                        <Typography className={classes.title} variant="h6">
                            BookFair
                        </Typography>
                    </a>
                    <div className={`${classes.search} ${classes.sectionDesktop}`}>
                        <div className={classes.searchIcon}>
                            <SearchIcon style={{color:sec}}/>
                        </div>
                        <div className={classes.input}>
                            <InputBase placeholder="Search..."
                                classes={{
                                    root:classes.inputRoot,
                                    input:classes.inputInput
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.menuNavbar}>
                        <Signin/>
                    </div>

                </Toolbar>
                <Toolbar className={classes.sectionMobile}>
                    <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon style={{color:sec}}/>
                            </div>
                            <div className={classes.input}>
                                <InputBase placeholder="Search..."
                                    classes={{
                                        root:classes.inputRoot,
                                        input:classes.inputInput
                                    }}
                                />
                            </div>
                        </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
