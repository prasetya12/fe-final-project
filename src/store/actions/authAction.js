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

export const signUp = (params)=>{
	try{
		console.log(params.file)

		const formData = new FormData()
		formData.append('avatar',params.file)
		formData.append('first_name',params.firstName)
		formData.append('last_name',params.lastName)
		formData.append('fullname',params.fullName)
		formData.append('role',params.role)
		formData.append('email',params.email)
		formData.append('password',params.password)


		// const fd = [];

		// for (var pair of formData.entries()) {
		// 	fd[pair[0]]=pair[1]
		// 	console.log(pair[0]+ ', ' + pair[1]); 
		// }

		// const datapost = {
		// 	first_name: params.firstName,
		// 	last_name : params.lastName,
		// 	fullname : params.fullName,
		// 	role : params.role,
		// 	email : params.email,
		// 	password : params.password,
		// }

		return (dispatch)=>{
			return axios.post(`${url}/users/register`,formData)
				.then(response=>{
					console.log(response,'response signup')
					dispatch({type:"SIGNUP_SUCCESS",response})
				})
				.catch((err)=>{
					console.log(err)
					dispatch({type:"SIGNUP_ERROR",err})
				})
		}
	}catch(error){
		console.log(error)
	}
}