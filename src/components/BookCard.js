import React,{Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
      },
}))


export default function BookCard(){
    const classes = useStyles();

    return(
        <Card className={classes.card}>
                <div style={{display:'flex',justifyContent:'center',padding:10}}>
                    <img src={require('../assets/buku.jpg')} style={{width:150,height:'100%'}}/>
                    
                </div>
                <CardContent>
                    <Typography variant="body1" color="textPrimar" component="p" style={{fontWeight:'500'}}>
                    Harry Potter
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:5}}>
                    by JK Rowling
                    </Typography>
                    <Typography variant="body2" component="p" style={{marginTop:5,color:'#12AFC0'}}>
                    Rp.120.000
                    </Typography>
                </CardContent>
        </Card>
    )
}