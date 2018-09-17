import React, { Component } from 'react';

import './Gallery.css';

class Gallery extends Component {

    constructor(props) {
        super(props);
    }

    playAudio(previewUrl) {
        console.log(previewUrl);
        let audio = new Audio(previewUrl);
        audio.play();
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
                                onClick={() => this.playAudio(track.preview_url)}
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