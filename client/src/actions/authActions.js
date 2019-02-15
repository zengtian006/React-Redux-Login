import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { SET_CURRENT_USER } from '../constants'

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
} 

export const login = (data) => {
    return dispatch => {
        return axios.post('/api/auth', data).then(res => {
            const token =  res.data.token;

            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwtDecode(token)));
        })
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken')
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
} 