import React from 'react'
import BookCard from '../components/BookCard'
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom'



export default function RowBook(){
    return(
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <Grid container justify="center" spacing={5}>
                    <Grid item xs={2}>
                        <Link to={'/product/'+2}>
                            <BookCard/>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to={'/product/'+2}>
                            <BookCard/>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to={'/product/'+2}>
                            <BookCard/>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to={'/product/'+2}>
                            <BookCard/>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to={'/product/'+2}>
                            <BookCard/>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}