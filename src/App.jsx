import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './App.css';

import Authorization from './authorization'
import Profile from './Profile';

class App extends Component{

    state = [];

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null
        };
        console.log(this.state);
    }

    search() {
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
        const accessToken = Authorization.SPOTIFY;

        let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;

        var myOptions = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        };

        fetch(FETCH_URL, myOptions)
            .then(response => response.json())
            .then(json => {
                const artist = json.artists.items[0];
                this.setState({ artist });
            })

        /*
        fetch(FETCH_URL, myOptions)
            .then(response => response.json())
            .then(json => {
                const artist = json.artists.items[0];
                this.setState({ artist });

                FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
                fetch(FETCH_URL, myOptions)
                    .then(response => response.json())
                    .then(json => {
                        const { tracks } = json;
                        this.setState({ tracks });
                    })
            })
        */
    }

    searchKeyPress(event) {
        if (event.key === 'Enter') {
            this.search();
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an Artist.."
                            value={this.state.query}
                            onChange={event => this.setState({ query: event.target.value })}
                            onKeyPress={event => this.searchKeyPress(event)}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search" />
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>

                <Profile
                    artist={this.state.artist}
                />

                <div className="Profile">
                </div>
                <div className="Gallery">
                </div>
            </div>
        )
    }
}

export default App;