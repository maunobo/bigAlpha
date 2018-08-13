import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer // the auth piece reducer is being produced by the auth reducer
});