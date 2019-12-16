import axios from 'axios'
const apiUrl = 'http://192.168.0.8:4000'

export const getBooks = ()=>{
	return (dispatch)=>{
		return axios.get(`${apiUrl}/books`)
			.then(response=>{
				console.log(response)
			})
	}
}