const initialState = {
    pokemon: "",
    isFetching: false,
    error: ""
};

export const pokeReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
        case "FETCH_POKEMON_START":
            return {
                ...state,
                isFetching: true,
            };
        case "FETCH_QUOTE_SUCCESS":
            return {
                ...state,
                isFetching: false,
                pokemon: action.payload,
                error: ''
            }
        case "FETCH_QUOTE_ERROR":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            return state;
    }
};