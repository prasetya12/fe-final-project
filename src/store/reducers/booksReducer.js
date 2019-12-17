const initState = {
	isSuccess:null,
    isError:null,
    isLoading:false,
    data:[],
    onebook:{}
}


const booksReducers = (state=initState,action)=>{
	switch (action.type) {
		case 'BOOKS_SUCCESS':
			return{
				...state,
				data:action.payload,
				isSuccess:true,
				isLoading:false

			}
		case 'BOOKS_LOADING':
			return{
				...state,
				isSuccess:null,
				isLoading:true
			}
		case 'BOOKS_ERROR':
			return{
				...state,
				isSuccess:false,
				isLoading:false,
    			isError:true,
			}
		case 'ONE_BOOK_SUCCESS':
			return{
				...state,
				isSuccess:true,
				isLoading:false,
				isError:false,
				onebook:action.payload
			}
		case 'ONE_BOOK_ERROR':
			return{
				...state,
				isSuccess:false,
				isLoading:false,
				isError:true
			}
		
        
			break;
		default:
			return state
			break;
	}
}

export default booksReducers