import axios from 'axios';

const initialState = {
    userData: {},
    name_first: ' ',
    name_last: ' ',
    gender: ' ',
    email: ' ',
    userUpdate: {},
    candidateUpdate: {},
    createCandidate: {},
    allCandidateData: {},
    photoUpload: {}
}

const GET_USER = 'GET_USER';
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CANDIDATE = 'UPDATE_CANDIDATE';
const CREATE_CANDIDATE = 'CREATE_CANDIDATE';
const FETCH_ALL_DATA = 'FETCH_ALL_DATA';
const UPLOAD_PHOTO = 'UPLOAD_PHOTO';

export function getUser(){
    const UserInfo = axios.get('/auth/verify')
    .then( res => res.data )
    return {
        type: GET_USER,
        payload: UserInfo
    }
}

// export function updateField(UserStepperInfo){
//     return {
//         type: UPDATE_FIELD,
//         payload: UserStepperInfo
//     }
// }

export function userDataPush(UserStepperInfo, image_url){
    console.log('userducks', UserStepperInfo)
    let data = Object.assign( {}, UserStepperInfo, image_url)
    let promise = axios.put('/api/update_user', data)
    .then( res => res.data )
    return { 
        type: UPDATE_USER,
        payload: promise
    }
}

export function createCandidateDataPush(CandidateStepperInfo){
    console.log('createCandidateducks')
    let promise = axios.post('/api/create_candidate', CandidateStepperInfo)
    .then( res => res.data )
    .then( () => window.location.assign('/') )
    return { 
        type: CREATE_CANDIDATE,
        payload: promise
    }
}

export function candidateDataPush(CandidateStepperInfo){
    console.log('updateCandidateducks')
    let promise = axios.put('/api/update_candidate', CandidateStepperInfo)
    .then( res => res.data )
    .then( () => window.location.assign('/') )
    return { 
        type: UPDATE_CANDIDATE,
        payload: promise
    }
}

export function fetchAllData(getAllData){
    let promise = axios.get('/api/fetch_all_data', getAllData)
    .then( res => res.data )
    return {
        type: FETCH_ALL_DATA,
        payload: promise
    }
}

export function photoUpload( photoData ) {
    return {
        type: UPLOAD_PHOTO,
        payload: photoData
    }
}

export default function reducer ( state = initialState, action ) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign( {}, state, {userData: action.payload} )
        case UPDATE_USER + '_FULFILLED':
            return Object.assign( {}, state, {userUpdate: action.payload} )
        case CREATE_CANDIDATE + '_FULFILLED':
            return Object.assign( {}, state, {createCandidate: action.payload} )
        case UPDATE_CANDIDATE + '_FULFILLED':
            return Object.assign( {}, state, {candidateUpdate: action.payload} )
        case FETCH_ALL_DATA + '_FULFILLED':
            return Object.assign( {}, state, {allCandidateData: action.payload} )
        case UPLOAD_PHOTO:
            return Object.assign( {}, state, {photoUpload: action.payload} )
        default: 
            return state;
    }
}