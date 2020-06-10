import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 23%;
    padding: 2%;
    margin: 1% 0;
    background-color: #4a4e69;
    border-radius: 5px;
    color: #f2e9e4;

    h2 {
        color: #f2e9e4;
    }

    .date {
        color: #9a8c98;
    }
`

const FilmCard = props => {

    return(
        <Card>
            <h2>{props.film.title}</h2>
            <p className='date'>{props.film.release_date}</p>
            <p>Director: {props.film.director}</p>
            <p>Producer: {props.film.producer}</p>
        </Card>
    )
}

export default FilmCard