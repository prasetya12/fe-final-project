import React,{Component} from 'react'
import {Grid,Drawer,Divider,List,ListItem,ListItemIcon,ListItemText,Inboc} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CusDrawer from '../components/CusDrawer'



const useStyles = makeStyles(theme=>({
	container:{
        paddingRight:'10%',
        paddingTop:'8%',
        paddingLeft:'10%',
        paddingBottom:'8%',
        alignItems:'center',
        display:'flex',
    },
}))

export default function Admin(props){
    const classes = useStyles();
    console.log('admin')
    return(
        <Grid container className={classes.container}>
           <CusDrawer/>
        </Grid>
    
        )
}