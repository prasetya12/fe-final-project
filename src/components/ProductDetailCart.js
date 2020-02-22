import React,{Component} from 'react'
import {Typography,Grid,Box,Card, CardMedia,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    cusmedia:{
        height:200,
        width:130,
    },
}))

function ProductDetailCart(props){
    const classes = useStyles();

    return(
        <Grid container>
            <Grid container xs={6}>
                <CardMedia
                        component="img"
                        className={classes.cusmedia}
                        image="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg"
                    />
            </Grid>
            <Grid container xs={6}>

            </Grid>
        </Grid>
    )
}

export default ProductDetailCart;