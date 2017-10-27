import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'

class App extends Component {
    render(){
        const myLocation = {
            lat: 40.7575285,
            lng: -73.9884469
        };

        return(
            <div>
                hello world!
                <div >
                    <Map containerElement={<div style={{width:300, height:600, background:'red'}}></div>}
                         center={myLocation}/>
                </div>
                <Places/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));