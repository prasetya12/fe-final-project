const initState = {
	isSuccess:null,
    isError:null,
    data:[]
}


const booksReducers = (state=initState,action)=>{
	console.log(action)
	switch (action.type) {
		case 'BOOKS_SUCCESS':
			return{
				...state,
				isSuccess:true,
			}
		case 'BOOKS_LOADING':
			return{
				...state,
				isSuccess:null,
			}
		
        
			break;
		default:
			return state
			break;
	}
}

export default booksReducers