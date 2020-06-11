import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import FilmCard from './FilmCard'

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const FilmList = props => {
    console.log(props)
    return (
        <CardList>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                props.films.map(film => {
                    return <FilmCard key={film.id} film={film} />
                })
            )}
        </ CardList>
    )
}

const mapStateToProps = state => {
    return {
        films: state.films,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(FilmList)