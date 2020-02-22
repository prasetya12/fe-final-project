import React,{Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Grid,Box,Card, CardContent,Button} from '@material-ui/core'
import { borders } from '@material-ui/system';
import ProductDetailCart from '../components/ProductDetailCart'



const useStyles = makeStyles(theme=>({
	container:{
        paddingRight:'10%',
        paddingTop: 120,
        paddingLeft:'10%',
        paddingBottom:'8%',
        alignItems:'center',
        display:'flex',
        // flexDirection:'column',
    },
    grid:{
        marginTop:20
    },
    gridorder:{
        borderBottomWidth:1,
        borderBottomColor:'#ACACAC',
        borderBottomStyle:'solid',
        paddingBottom:20,
        fontSize:20,
        fontWeight:500
    },
    gridcontent:{
        marginTop:20,
        
    },
    containergrid:{
        borderBottomWidth:1,
        borderBottomColor:'#ACACAC',
        borderBottomStyle:'solid',
        paddingBottom:20,
    },
    totalsummary:{
        paddingTop:20
    },
    buttonsummary:{
        marginTop:50,
        fontSize:12
    },
    buttoncontainer:{
        marginTop:10
    },
    containeritem:{
        marginTop:20
    },
    buttoncheckout:{
        background:'#4288CC',
        '&:hover': {
            background: "#4288CC",
         },
        color:'white'
    }
}))


function Cart(props){
    const classes = useStyles();
    return(
        <Grid container className={classes.container}>
            <Box fontWeight={500} fontSize={28} color='#142850'>
                Shopping Cart
            </Box>
            <Grid container spacing={5}  className={classes.grid}>
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item direction="row" align="center" xs={6}>
                                    Product Detail
                                </Grid>
                                <Grid item direction="row" align="center" xs={2}>
                                    Quantity
                                </Grid>
                                <Grid item direction="row" align="center" xs={2}>
                                    Price
                                </Grid>
                                <Grid item direction="row" align="center" xs={2}>
                                    Total
                                </Grid>
                            </Grid>
                            <Grid container className={classes.containeritem}>
                                <Grid item direction="row" align="center" xs={6}>
                                    <ProductDetailCart/>
                                </Grid>
                                <Grid item direction="row" align="center" xs={2}>
                                    Quantity
                                </Grid>
                                <Grid item direction="row" align="center" xs={2}>
                                    Price
                                </Grid>
                                <Grid item direction="row" align="center" xs={2}>
                                    Total
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Grid className={classes.gridorder}>
                                Order Summary
                            </Grid>
                            <Grid container className={classes.containergrid}>
                                <Grid container direction="row" className={classes.gridcontent}>
                                    <Grid item xs={6}>
                                        Subtotal
                                    </Grid>
                                    <Grid container xs={6} direction="row" justify="flex-end">
                                        Rp. 100.000,-
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" className={classes.gridcontent}>
                                    <Grid item xs={6}>
                                        Fee
                                    </Grid>
                                    <Grid container xs={6} direction="row" justify="flex-end">
                                        Rp. 50.000,-
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.totalsummary}>
                                <Grid item xs={6}>
                                    Total
                                </Grid>
                                <Grid container xs={6} direction="row" justify="flex-end">
                                    Rp. 150.000,-
                                </Grid>
                            </Grid>
                            <Grid container xs={12} justify="flex-end" className={classes.buttonsummary}>
                                Get a promo code ?
                            </Grid>
                            <Grid container xs={12} justify="flex-end" className={classes.buttoncontainer}>
                                 <Button className={classes.buttoncheckout}>
                                    Checkout
                                </Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Cart