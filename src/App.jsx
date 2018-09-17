import React, { Component } from 'react';

import './App.css';

class App extends Component{

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div className="App">
                <div className="App-title">Music Master</div>
                <div>
                    <input placeholder="search an artist..." />
                    <button>search</button>
                </div>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;