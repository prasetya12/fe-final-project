import React,{Component} from 'react'
import {Typography,Grid,Box,Card, CardMedia,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    cusmedia:{
        height:150,
        width:100,
    },
}))

function ProductDetailCart(props){
    const classes = useStyles();

    return(
        <Grid container alignItems='center' style={{paddingLeft:20}}>
            <Grid container xs={4}>
                <CardMedia
                        component="img"
                        className={classes.cusmedia}
                        image="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg"
                    />
            </Grid>
            <Grid container xs={8}>
                <Grid container style={{fontWeight:500,fontSize:18}}>
                    Taming Jaguar
                </Grid>
                <Grid container style={{fontSize:14}}>
                    Alex Morgan
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductDetailCart;