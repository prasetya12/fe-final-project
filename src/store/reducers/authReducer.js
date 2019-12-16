const initState = {
	isSuccess:null,
    isLoading:false,
    isLogout:null,
    signupsuccess:null,
    authError:{},
    token:null
}

const authReducers = (state=initState,action)=>{
	console.log(action)
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return{
				...state,
				token:action.payload,
				isSuccess:true,
				isLoading:false
			}
		case 'LOGIN_LOADING':
			return{
				...state,
				isSuccess:null,
				isLoading:true,
				isLogout:false
			}
		case 'LOGIN_ERROR':
            return {
                ...state,
                isSuccess:false,
                isLoading:false

            }
        case 'LOGOUT_SUCCESS':
        	return{
        		...state,
        		isLogout:true,
        		isSuccess:null,
        	}
        case 'LOGOUT_ERROR':
        	return{
        		...state,
        		isLoading:false,
        		isSuccess:false,
        		authError:action.err
        	}
        case 'SIGNUP_SUCCESS':
        	return{
        		...state,
        		isLoading:false,
        		signupsuccess:true,
        	}
        case 'SIGNUP_ERROR':
        	return{
        		...state,
        		isLoading:false,
        		signupsuccess:false
        	}
			break;
		default:
			return state
			break;
	}
}

export default authReducers