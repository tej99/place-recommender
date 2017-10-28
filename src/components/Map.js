import React, { Component } from 'react'
import { GoogleMap, Marker, withGoogleMap} from 'react-google-maps'

class Map extends Component {
    render() {

        const markers = this.props.markers.map((place, i) => {
            const marker = {
                position: {
                    lat: place.geometry.location.lat,
                    lng: place.geometry.location.lng
                }
            };
            return <Marker key={i} {...marker}/>
        });

        const MyMapComponent = withGoogleMap(() =>
            <GoogleMap
                defaultZoom={14}
                defaultCenter={this.props.center}
                options={{streetViewControl: false, mapTypeControl: false}}>
                { markers }
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