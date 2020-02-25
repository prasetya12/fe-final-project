import React,{Component} from 'react'
import {Grid,Button,Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TableBooks from '../components/TableBooks'

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft:240,
        marginTop:100,
      },
      toolbar: theme.mixins.toolbar,
}))

export default function BookAdmin(props){
    const classes = useStyles()

    return(
        <main className={classes.content}>
            <Grid container direction="row" xs={12} alignItems='center'>
                <Grid container alignItems='center' xs={6}>
                    <Grid item style={{fontWeight:600,fontSize:24}}>
                        Book Management

                    </Grid>
                </Grid>
                <Grid container justify='flex-end' xs={6} alignItems='center'>
                    <Button variant="contained" color="primary">
                        Add Book
                    </Button>
                </Grid>
            </Grid>
            <Grid container xs={12} style={{marginTop:20}}>
                <TableBooks/>
            </Grid>
        </main>
    )
}