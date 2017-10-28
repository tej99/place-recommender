import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent'

class App extends Component {
    constructor(){
        super();
        this.state = {
            places: []
        }
    }
    componentDidMount(){
        console.log('componentDidMount');

        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7127753,-74.0059728&key=YOUR_API_KEY_GOES_HERE&radius=3000'

        superagent
            .get(url)
            .set('Accept', 'text/json')
            .end((error, response) => {

                const places = response.body.results;
                console.log(JSON.stringify(places));
                this.setState({
                    places: places,
                })
            })
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
                         markers={this.state.places}
                    />
                </div>

                <div style={{float: 'left', width:300, height:600}}>
                    <Places places={this.state.places}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));