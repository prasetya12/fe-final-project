import React,{Component} from 'react'
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import GridListTile from '@material-ui/core/GridListTile'
import {url} from '../constant/const'

function convertRupiah(number){
    const reverse = number.toString().split('').reverse().join('')
    const ribuan = reverse.match(/\d{1,3}/g);
    const ribuan_ = ribuan.join('.').split('').reverse().join('');

    return "Rp. "+ribuan_+",-"

}

const useStyles = makeStyles(theme => ({
    root:{
        width:180
    },
    cusmedia:{
        height:130,
        width:90
    },
}))


export default function BookCard(props){
    console.log(props.data,'props')
    const classes = useStyles();
    return(
            <Card className={classes.root}>
                <CardActionArea>
                    <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    paddingTop:20
                    }}>
                    <CardMedia
                        component="img"
                        className={classes.cusmedia}
                        image={url+"/"+props.data.cover}
                    />
                    </div>

                    <CardContent>
                        <Typography  style={{color:"#4288CC",fontSize:'0.8rem'}}>
                        {props.data.book_name}
                        </Typography>
                        <Typography variant="body3" color="textSecondary" component="p">
                            {"by "+props.data.author}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:20,color:'#A53365'}}>
                            {convertRupiah(props.data.price)}
                        </Typography>
                    </CardContent>
                    
                </CardActionArea>
                
            </Card>
    )
}