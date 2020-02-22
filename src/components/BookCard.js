import React,{Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import GridListTile from '@material-ui/core/GridListTile'




const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
      },
    root:{
        maxWidth:200
    },
    cusmedia:{
        height:200,
        width:130,
    },
}))


// export default function BookCard(props){
//     const data = props.data
//     const classes = useStyles();

//     return(
//         <Card className={classes.card}>
//                 <div style={{display:'flex',justifyContent:'center',padding:10}}>
//                     <img src={data.image_url} style={{width:150,height:250}}/>
                    
//                 </div>
//                 <CardContent>
//                     <Typography variant="body1" color="textPrimar" component="p" style={{fontWeight:'500'}}>
//                     {data.name}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:5}}>
//                     by JK Rowling
//                     </Typography>
//                     <Typography variant="body2" component="p" style={{marginTop:5,color:'#12AFC0'}}>
//                     {data.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })}
//                     </Typography>
//                 </CardContent>
//         </Card>
//     )
// }

export default function BookCard(props){
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
                        image="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg"
                    />
                    </div>

                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" style={{color:"#4288CC"}}>
                        Taming Jaguar
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        by Alex Morgan
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:20,color:'#A53365'}}>
                        Rp. 20.000,-
                    </Typography>
                    </CardContent>
                    
                </CardActionArea>
                
            </Card>
    )
}