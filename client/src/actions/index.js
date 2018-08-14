import axios from 'axios';
import { FETCH_USER } from './types';

// original syntax
// export const fetchUser = () => {
//     return function(dispatch) { // we want to dispatch an action right after...
//         axios.get('/api/current_user') // ... this request has been completed
//             .then(res => dispatch({ type: FETCH_USER, payload: res}));
//     };
// };

// refactored syntax
export const fetchUser = () => 
    async (dispatch) => { // we want to dispatch an action right after...
        const res = await axios
            .get('/api/current_user') // ... this request has been completed
            dispatch({ type: FETCH_USER, payload: res.data });
    };