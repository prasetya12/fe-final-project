import React,{Component} from 'react'
import Carousel from '../components/Carousel'
import { makeStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';
import { Grid,GridListTile, CardActionArea } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import BookCard from '../components/BookCard'
import SummaryBook from '../components/SummaryBook'
import {getBooks} from '../store/actions/booksAction' 
import {connect,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import GridList from '@material-ui/core/GridList';
import dataset from '../sample_data/dataset'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
      },
    container:{
        paddingRight:'10%',
        paddingTop:'5%',
        paddingLeft:'10%',
        alignItems:'center',
        display:'flex',
        flexDirection:'column'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    containerProduk:{
        marginTop:'3%'
    },
    gridList: {
      },
    grid:{
      flexGrow:1
    },
    gridListTile:{
      marginLeft:20,
      marginRight:20,
    }
    
}))

function Home(props){
    const databooks = useSelector(state => state.books.data);
    const classes = useStyles();
    const [category, setCategory] = React.useState('');

    const [data,setData] = React.useState([]);

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
      }, []);

    const handleChange = event => {
        setCategory(event.target.value);
      };

      // React.useEffect(()=>{
      //   return ()=>{
      //       props.getBooks()
      //   }
      // })

      React.useEffect(()=>{
        props.getBooks()
        
      }, [])


    return(
        <div className={classes.container}>
            <Carousel/>
            <Grid container spacing={3} style={{display:'flex',alignItems:'center'}}>
                <Grid item xs={6} style={{fontWeight:'500',fontSize:20}}>
                    Produk
                </Grid>
                <Grid item xs={6} style={{justifyContent:'flex-end',display:'flex'}}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                    Category
                    </InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={category}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    > 
                    <MenuItem value={10}>All Produk</MenuItem>
                    <MenuItem value={20}>Novel</MenuItem>
                    <MenuItem value={30}>Education</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={5} justify="center" className={classes.grid}>
              <GridList  cellHeight={370} cols={6} rows={1}>
                <GridListTile cols="1" className={classes.gridListTile}>
                  <Link to="/product/2">
                    <BookCard/>

                  </Link>
                </GridListTile>
                <GridListTile cols="1" className={classes.gridListTile}>
                  <BookCard/>
                </GridListTile>
                <GridListTile cols="1" className={classes.gridListTile}>
                  <BookCard/>
                </GridListTile>
                <GridListTile cols="1" className={classes.gridListTile}>
                  <BookCard/>
                </GridListTile>
                <GridListTile cols="1" className={classes.gridListTile}>
                  <BookCard/>
                </GridListTile>
                <GridListTile cols="1" className={classes.gridListTile}>
                  <BookCard/>
                </GridListTile>
                <GridListTile cols="1" className={classes.gridListTile}>
                  <BookCard/>
                </GridListTile>
               


              </GridList>
            
            </Grid>   

           
        </div>
    )
    
}

const mapStateToProps = (state)=>{
  return{
    books:state.books
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    getBooks:()=>dispatch(getBooks())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)