import React from 'react'
import { connect } from 'react-redux'

import { getData } from '../actions'

const FilmForm = props => {

    const handleGetData = event => {
        event.preventDefault()
        props.getData()
    }

    return (
        <>
            {props.isFetchingData ? (
                <div>**we are fetching data**</div>
            ) : (
                <button onClick={handleGetData}>get films</button>
            )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(FilmForm)