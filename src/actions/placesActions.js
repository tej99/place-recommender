import superagent from 'superagent';

export function getPlaces(){
    return function(dispatch){
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7127753,-74.0059728&key=AIzaSyCVONRys22RJpa4nlRez2507rqfbWST5H8&radius=3000';
        superagent
            .get(url)
            .set('Accept', 'text/json')
            .then(function(response){
                dispatch({type:"GET_PLACES", payload: response.body.results})
            })
            .catch(function(error){
                dispatch({type:"GET_PLACES_REJECTED", payload: error})
            })
    }
}