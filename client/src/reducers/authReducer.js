// create a reducer and immidiatelly export it
import { FETCH_USER } from '../actions/types';

// the authReducer has to return either: null, usermodel (action.payload) or false
export default function(state = null, action) { // first time the application boots, return a null , because we dont know if the usre is logged in or not
    // console.log(action); //test in browser console to check if it returns the requested data
    switch (action.type) {
        case FETCH_USER: // returns the user model or false 
            return action.payload || false; // truthy-falsy
        default: 
            return state;
    }
}