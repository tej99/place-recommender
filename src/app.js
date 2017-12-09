import React, { Component } from 'react';
import Map from './components/Map';
import Places from './components/Places';
import superagent from 'superagent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPlaces} from './actions/placesActions.js';

class App extends Component {
    constructor(){
        super();
        // this.state = {
        //     places: []
        // }
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.props.getPlaces();

        // const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7127753,-74.0059728&key=AIzaSyCVONRys22RJpa4nlRez2507rqfbWST5H8&radius=3000'
        //
        // superagent
        //     .get(url)
        //     .set('Accept', 'text/json')
        //     .end((error, response) => {
        //
        //         const places = response.body.results;
        //         console.log(JSON.stringify(places));
        //         this.setState({
        //             places: places,
        //         })
        //     })
    }

    render(){

        const myLocation = {
            lat : 40.7127753,
            lng : -74.0059728
        };


        return(
            <div>
                <div >
                    <Map containerElement={<div style={{float: 'left', width: '40vw', height: '100vh', background:'red'}}></div>}
                         center={myLocation}
                         markers={this.props.places}
                    />
                </div>

                <div style={{float: 'left', width:300, height:600}}>
                    <Places places={this.props.places}/>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        places: state.places.places
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getPlaces: getPlaces
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps) (App);