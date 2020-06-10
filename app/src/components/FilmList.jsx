import React from 'react'
import { connect } from 'react-redux'

const FilmList = props => {
    console.log(props)
    return (
        <>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                props.films.map(film => {
                    return <div key={film.id}>{film.title}</div>
                })
            )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        films: state.films,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(FilmList)