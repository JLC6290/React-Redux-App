const initialState = {
    name: "",
    image: "",
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
            return state;
    }
};