import axios from 'axios'
// const apiUrl = 'http://192.168.0.8:4000'
import {url} from '../../constant/const.js'


export const getBooks = ()=>{
	return (dispatch)=>{
		return axios.get(`${url}/books`)
			.then(response=>{
				dispatch({type:"BOOKS_SUCCESS",payload:response.data})

			})
			.catch((err)=>{

				dispatch({type:"BOOKS_ERROR",err})
			})
	}
}

 
export const oneBook = (id)=>{
	return(dispatch)=>{
		return axios.get(`${url}/book/${id}`,{
			headers:{
				'Authorization':window.localStorage.getItem('token')
			}
		})
			.then(response=>{
				dispatch({type:"ONE_BOOK_SUCCESS",payload:response.data})
			})
			.catch((err)=>{
				dispatch({type:"ONE_BOOK_ERROR",err})
			})
	}
}