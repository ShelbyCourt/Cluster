import axios from 'axios';

const initialState = {
    username: '',
    id: 0,
    profile_pic: '',
    // user: {},
    isLoggedIn: false    
}

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'

export function updateUser (id, username, email) {
    return {
        type: UPDATE_USER,
        payload: {
            id: id,
            username: username,
            email: email
        }
    }
}

export function logoutUser () {
    return {
        type: LOGOUT_USER,
        payload: initialState,
        isLoggedIn: false
    }
}

export function getUser () {
    const user = axios.get('/api/user')

    return {
        type: GET_USER,
        payload: user
    }
}

export default function reducer (state = initialState, action){
    switch (action.type) {
        case UPDATE_USER:
            return {...state, username: action.payload.username, id: action.payload.id, profile_pic: action.payload.profile_pic, isLoggedIn: true}
        // case UPDATE_USER + '_PENDING':
        //     return state
        // case UPDATE_USER + '_FULFILLED':
        //     return {...state, username: action.payload.username, id: action.payload.id, profile_pic: action.payload.profile_pic, isLoggedIn: true}
        // case UPDATE_USER + '_REJECTED':
        //     return initialState 
        case LOGOUT_USER:
            return {...state ,...action.payload, isLoggedIn: false}
        case GET_USER + '_PENDING':
            return state
        case GET_USER + '_FULFILLED':
            return {...state, user: action.payload.data, isLoggedIn: true}
        case GET_USER + '_REJECTED':
            return initialState      
        default:
            return state
    }
}