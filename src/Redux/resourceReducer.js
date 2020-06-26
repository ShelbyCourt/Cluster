// import axios from 'axios';

const initialState = {
    title: '',
    resourceUrl: '',
    description: '',
    category: '',
    id: 0
}

const UPDATE_RESOURCE = 'UPDATE_RESOURCE'
// const DELETE_RESOURCE = 'DELETE_RESOURCE'
// const GET_RESOURCE = 'GET_RESOURCE'

export function updateResource (id, title, resourceUrl, description, category) {
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

export default function reducer ( state = initialState, action) {
    switch (action.type) {
        case UPDATE_RESOURCE:
            return {...state, title: action.payload.title, resourceUrl: action.payload.resourceUrl, category: action.payload.category, id: action.payload.id}
        default:
            return state
    }
}