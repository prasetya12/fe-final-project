import axios from 'axios'
import {url} from '../../constant/const.js'
export const signIn = (email,password)=>{
	return (dispatch)=>{
		// console.log(dispatch,'halo')
		return axios.post(`${url}/users/login`,{email:email,password:password,role:0})
			.then(response=>{
				window.localStorage.setItem('token',"Bearer "+response.data.token)

				dispatch({type:"LOGIN_SUCCESS",payload:response.data.token})
			})	
			.catch((err)=>{

				dispatch({type:"LOGIN_ERROR",err})
			})
	}
}

export const signOut = ()=>{
	return(dispatch)=>{
		return axios.post(`${url}/users/logout`,null,{
			headers:{
				'Authorization':window.localStorage.getItem('token')
			}
		})
		.then(response=>{
			console.log(response,"hello")
			window.localStorage.removeItem('token')
			dispatch({type:"LOGOUT_SUCCESS",response})
		})
		.catch((err)=>{
			console.log(err)
			dispatch({type:"LOGOUT_ERROR",err})
		})
	}
}

export const signUp = (firstName,lastName,email,password)=>{
	return (dispatch)=>{
		return axios.post(`${url}/users`,{first_name:firstName,last_name:lastName,role:0,email:email,password:password})
			.then(response=>{
				console.log(response,'response signup')
				dispatch({type:"SIGNUP_SUCCESS",response})
			})
			.catch((err)=>{
				console.log(err)
				dispatch({type:"SIGNUP_ERROR",err})
			})
	}
}