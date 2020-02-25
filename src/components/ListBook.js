import React,{Component} from 'react'
import {GridListTile } from '@material-ui/core';
import {Link} from 'react-router-dom'
import BookCard from '../components/BookCard'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

}))

export default function ListBook(props){
    if(props.data){
        return props.data.map((book,index)=>{
            console.log(book)
            return(
                <GridListTile cols="1" key={index} style={{marginLeft:'2rem',marginRight:'2rem'}}>
                    <Link to={"/product/"+book._id}>
                        <BookCard data={book}/>
                    </Link>
                </GridListTile>
            )
        })
    }else{
        return "";
    }

   
}