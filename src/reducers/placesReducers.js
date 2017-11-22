export function placesReducers(state={places:[]}, action){
    switch(action.type){
        case "GET_PLACES":
            return {...state, places: [...state.places]};
            break;
        default:
            return state;
            break;
    }
}