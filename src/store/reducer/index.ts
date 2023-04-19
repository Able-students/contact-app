import contactReducer from './contactReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    contactReducer, userReducer
})