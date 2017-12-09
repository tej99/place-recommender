export function placesReducers(state={places:[]}, action){
    switch(action.type){
        case "GET_PLACES":
            return {...state, places: [...action.payload]};
            break;
        default:
            return state;
            break;
    }
}