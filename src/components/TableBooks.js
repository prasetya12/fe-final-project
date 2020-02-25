import React,{Component} from 'react'
import {Table,TableBody,Grid,TableCell,Paper,TableHead,TableRow,CardMedia} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
    }

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    media: {
        height: 0,
        width:100
    },
  });
export default function TableBook(props){
    const classes = useStyles();
    return(
        <TableContainer component={Paper}>
             <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Produk</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            <Grid container xs={12} alignItems='center'>
                                <Grid container xs={3} alignItems='center'>
                                        <img src="http://127.0.0.1:8081/uploads/2-23-2020-1582392553045-photo_2.jpg" style={{width:90,height:100}}/>
                                </Grid>
                                <Grid container direction='column' xs={9}>
                                    <div style={{fontWeight:500}}>
                                        Harry Potter
                                    </div>
                                    <div style={{fontSize:12}}>
                                        by JK Rowling
                                    </div>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        )
}
