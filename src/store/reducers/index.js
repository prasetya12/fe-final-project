import {combineReducers} from 'redux'
import auth from './authReducer'
import books from './booksReducer'


export default combineReducers({
	auth:auth,
	books:books
})