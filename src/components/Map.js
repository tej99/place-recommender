import React, { Component } from 'react'
import { GoogleMap, Marker, withGoogleMap} from 'react-google-maps'

class Map extends Component {
    render() {

        const MyMapComponent = withGoogleMap(() =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={this.props.center}
                options={{streetViewControl: false, mapTypeControl: false}}>
            </GoogleMap>
        );


        return (
            <MyMapComponent
            containerElement={this.props.containerElement}
            mapElement={<div style={{height: '100%', width:'100%'}}></div>}
            />
        )
    }
}

export default Map