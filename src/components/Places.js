import React, { Component } from 'react'

class Places extends Component {
    render() {
        const list = this.props.places.map((place, i) => {
            return (
                <li key={i}>{place.name}</li>
            )
        });

        return (
            <div>
                <ol>
                    {list}
                </ol>
            </div>
        )
    }
}

export default Places