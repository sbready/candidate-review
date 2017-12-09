import axios from 'axios';

const initialState = {
    userData: {},
    name_first: ' ',
    name_last: ' ',
    gender: ' ',
    email: ' '
}

const GET_USER = 'GET_USER';
const UPDATE_FIELD = 'UPDATE_FIELD';

export function getUser(){
    const UserInfo = axios.get('/auth/verify')
    .then( res => res.data )
    return {
        type: GET_USER,
        payload: UserInfo
    }
}

export function updateField(text, field){
    return {
        type: UPDATE_FIELD,
        field: field,
        payload: text
    }
}

export default function reducer ( state = initialState, action ) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign( {}, state, {userData: action.payload})
        case UPDATE_FIELD:
            if ( action.field === 'name_first' ) {
                console.log(state)
                return Object.assign( {}, state, {name_first: action.payload} )
            } else if ( action.field === 'name_last' ) {
                return Object.assign( {}, state, {name_last: action.payload} )
            } else if ( action.field === 'gender' ) {
                return Object.assign( {}, state, {gender: action.payload} ) 
            } else { //email
                return Object.assign( {}, state, {email: action.payload} )
            }
        default: 
            return state;
    }
}