import React,{Component} from 'react'
import {Grid,Drawer,Divider,List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ClassIcon from '@material-ui/icons/Class';
import {Link} from 'react-router-dom'






import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;
const useStyles = makeStyles(theme=>({
	drawerPaper: {
        width: drawerWidth,
    },
    drawer: {
    [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
    },
    },
}))

export default function CusDrawer(props){
    const classes = useStyles();

    return(
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List style={{paddingTop:100}}>
                <Link to="/admin/books">
                    <ListItem button>
                            <ListItemIcon><MenuBookIcon /></ListItemIcon>
                            <ListItemText primary={"Books"} />
                        </ListItem>
                </Link>
                    <ListItem button>
                        <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
                        <ListItemText primary={"User"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><ClassIcon /></ListItemIcon>
                        <ListItemText primary={"Category"} />
                    </ListItem>
                </List>
            </Drawer>
        </nav>
    )
}