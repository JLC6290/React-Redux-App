import axios from 'axios';

export const fetchPokemon = () => {
    return dispatch => {
        dispatch({ type: "FETCH_POKEMON_START" })
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                console.log(response.data.results)
                dispatch({ type: "FETCH_QUOTE_SUCCESS", payload: response.data.results })
            })
            .catch(error => {
                console.log("error", error)
                dispatch({
                    type: "FETCH_QUOTE_ERROR",
                    payload: `${error.response.status} : ${error.response.data}`
                })
            });
    }
}

