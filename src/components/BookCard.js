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


export default function BookCard(props){
    const data = props.data
    const classes = useStyles();

    return(
        <Card className={classes.card}>
                <div style={{display:'flex',justifyContent:'center',padding:10}}>
                    <img src={data.image_url} style={{width:150,height:250}}/>
                    
                </div>
                <CardContent>
                    <Typography variant="body1" color="textPrimar" component="p" style={{fontWeight:'500'}}>
                    {data.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:5}}>
                    by JK Rowling
                    </Typography>
                    <Typography variant="body2" component="p" style={{marginTop:5,color:'#12AFC0'}}>
                    {data.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}
                    </Typography>
                </CardContent>
        </Card>
    )
}