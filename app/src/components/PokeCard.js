import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchPokemon } from '../store/actions/pokeActions';

const PokeCard = props => {

    useEffect(() => {
        // call action creator here
        props.fetchPokemon();
    }, [])

    return (
        <div>
            <h1>Catch some Pokemon!</h1>
            {props.isFetching && (<Loader 
                type="Puff"
                color="#00BFFF" 
                height={100}
                width={100}
                />)}
            {props.isFetching && <h3>{props.name}</h3>}
            {console.log(props)}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        name: state.pokeReducer.name,
        isFetching: state.pokeReducer.isFetching,
        error: state.pokeReducer.error
    };
};

export default connect(mapStateToProps, { fetchPokemon })(PokeCard);