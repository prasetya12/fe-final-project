import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import asset from '../assets/assets1.jpg'
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    container:{
        width:'100%',
        height:350,
        display:'flex',
        alignItems:'center',
        paddingLeft:'1%',
        paddingRight:'1%',
        paddingTop:'1%',
        paddingBottom:'1%',
    }
}))
export default function Navbar(){
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <img src="https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/1.27Autographed_945.jpg" style={{width:'70%',height:'90%'}}/>
            <div style={{width:'100%',marginLeft:'1%',height:'100%',flex:1}}>
                <div style={{height:'50%',padding:'1%',justifyContent:'flex-end',display:'flex'}}>
                    <div style={{height:'80%',width:'97%',marginTop:13}}>
                        <img src="https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/1.23AmericanDirt_OprahQuote_ver2.jpg" style={{width:'100%',height:'100%'}}/>
                    </div>
                </div>
                <div style={{height:'50%',padding:'1%',justifyContent:'flex-end',display:'flex',marginTop:7}}>
                    <div style={{height:'80%',width:'97%',}}>
                        <img src="https://images.booksamillion.com/home_flash/flashbanner_1/content/map/home/2.4IntheNews_945v2.jpg" style={{width:'100%',height:'100%'}}/>
                    </div>
                </div>
            </div>
        </div> 
    )

}