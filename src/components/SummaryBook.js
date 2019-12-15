import React from 'react'
import RowBook from '../components/RowBook'
import { Grid } from '@material-ui/core'


export default function SummaryBook(){
    return(
        <Grid container spacing={10}>
            <Grid container item xs={12} spacing={3}>
                <RowBook/>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <RowBook/>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <RowBook/>
            </Grid>
        </Grid>
    )
}