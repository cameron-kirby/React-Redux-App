import { GET_DATA, UPDATE_FILMS, SET_ERROR } from '../actions'

const initialState = {
    films: [],
    isFetchingData: false,
    error: '',
    
}

export const filmReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true
            }
        case UPDATE_FILMS:
            return {
                ...state,
                films: action.payload,
                isFetchingData: false,
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
    
        default:
            return state
    }
}