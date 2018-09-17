import React, { Component } from 'react';

import './Gallery.css';

class Gallery extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { tracks } = this.props;
        return (
            <div>
                {
                    tracks.map((track, k) => {
                        const trackImg = track.album.images[0].url;
                        return(
                            <div
                                key={k}
                                className="track"
                            >
                                <img
                                    src={trackImg}
                                    className="track-img"
                                    alt={track.name}
                                />
                                <p className="track-text">
                                    {track.name}
                                </p>
                            </div>
                        ) 
                    })
                }
            </div>
        )      
    
    }
}
    
export default Gallery;