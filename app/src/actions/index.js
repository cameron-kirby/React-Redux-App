import axios from 'axios'

export const GET_DATA = "GET_DATA"
export const UPDATE_FILMS = "UPDATE_FILMS"
export const SET_ERROR = "SET_ERROR"

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA })
    axios
        .get('https://ghibliapi.herokuapp.com/films')
        .then(response => {
            console.log(response)
            dispatch({ type: UPDATE_FILMS, payload: response.data })
        }) 
        .catch(error => {
            console.log(error)
            dispatch({ type: SET_ERROR, payload: 'Error fetching data from api'})
        })
}