import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import asset from '../assets/assets1.jpg'
import { flexbox } from '@material-ui/system';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container:{
        flexGrow:1,
        marginBottom:20,
        marginTop:20,
        justifyContent:'center',
        display:'flex',
        [theme.breakpoints.up('xs')]:{
            marginTop:100
        },
        [theme.breakpoints.up('md')]:{
            marginTop:20
            
        }
    },
    carousel:{
        [theme.breakpoints.up('xs')]:{
            width:'100%',
            height:180
            
        },
        [theme.breakpoints.up('md')]:{
            width:'100%',
            height:380
            
        }
    },
    secondCarousel:{
        [theme.breakpoints.up('xs')]:{
            display:'none'
        },
        [theme.breakpoints.up('md')]:{
            display:'flex'
        }
    }
}))
export default function Navbar(){
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Grid  md={8}>
                <img src="https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/1.27Autographed_945.jpg" className={classes.carousel}  />
            </Grid>
            <Grid md={4} container className={classes.secondCarousel} style={{marginLeft:20,marginBottom:5}}>
                <div>
                    <img src="https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/1.23AmericanDirt_OprahQuote_ver2.jpg" style={{width:'100%',height:180}}/>
                </div>
                <div style={{display:'flex',alignItems:'flex-end'}}>
                    <img src="https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/1.23AmericanDirt_OprahQuote_ver2.jpg" style={{width:'100%',height:180}}/>
                </div>
            </Grid>
        </div>

        // <div className={classes.container}>
        //     <img src="https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/1.27Autographed_945.jpg" style={{width:'70%',height:'90%'}}/>
        //     <div style={{width:'100%',marginLeft:'1%',height:'100%',flex:1}}>
        //         <div style={{height:'50%',padding:'1%',justifyContent:'flex-end',display:'flex'}}>
        //             <div style={{height:'80%',width:'97%',marginTop:13}}>
        //                 <img src="https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/1.23AmericanDirt_OprahQuote_ver2.jpg" style={{width:'100%',height:'100%'}}/>
        //             </div>
        //         </div>
        //         <div style={{height:'50%',padding:'1%',justifyContent:'flex-end',display:'flex',marginTop:7}}>
        //             <div style={{height:'80%',width:'97%',}}>
        //                 <img src="https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/2.4IntheNews_945v2.jpg" style={{width:'100%',height:'100%'}}/>
        //             </div>
        //         </div>
        //     </div>
        // </div> 
    )

}