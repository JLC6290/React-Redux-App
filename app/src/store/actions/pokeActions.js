import axios from 'axios';

export const fetchPokemon = () => {
    return dispatch => {
        dispatch({ type: "FETCH_POKEMON_START" })
        // axios
        //     .get('https://pokeapi.co/api/v2/pokemon')
        //     .then(response => {
        //         console.log(response)
        //         dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: response.data.name })
        //     })
        //     .catch(error => console.log("error", error));
    }
}

