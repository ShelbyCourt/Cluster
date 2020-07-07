import axios from 'axios';

const initialState = {
    title: '',
    resourceUrl: '',
    description: '',
    category: '',
    id: 0
}

const UPDATE_RESOURCE = 'UPDATE_RESOURCE'
const ADD_RESOURCE = 'ADD_RESOURCE'
// const DELETE_RESOURCE = 'DELETE_RESOURCE'
const GET_ONE_RESOURCE = 'GET_ONE_RESOURCE'

export function addResource (title, resourceUrl, category, language, userId) {
    return {
        type: ADD_RESOURCE,
        payload: {            
            title: title,
            resourceUrl: resourceUrl,            
            category: category,
            language: language,
            userId: userId
        }
    }
}

export function updateResource (id, title, resourceUrl, description, category) {
    console.log('hit get one res')
    return {
        type: UPDATE_RESOURCE,
        payload: {
            id: id,
            title: title,
            resourceUrl: resourceUrl,
            description: description,
            category: category
        }
    }
}

// export function getOneResource (id, title, resourceUrl, description, category) {
//     const resource = axios.get('/api/oneresource')
//     return {
//         type: GET_ONE_RESOURCE,
//         payload: {
//             id: id,
//             title: title,
//             resourceUrl: resourceUrl,
//             description: description,
//             category: category
//         }
//     }
// }

export default function reducer ( state = initialState, action) {
    switch (action.type) {
        case ADD_RESOURCE:
            return {...state, title: action.payload.title, resourceUrl: action.payload.resourceUrl, category: action.payload.category, language: action.payload.language, userId: action.payload.userId}
        case UPDATE_RESOURCE:
            return {...state, title: action.payload.title, resourceUrl: action.payload.resourceUrl, category: action.payload.category, id: action.payload.id}
        case GET_ONE_RESOURCE:
            return {...state, title: action.payload.title, resourceUrl: action.payload.resourceUrl, category: action.payload.category, id: action.payload.id}
        default:
            return state
    }
}
