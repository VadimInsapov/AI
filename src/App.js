import React, {useState, useEffect} from 'react';
import TrackField from './TrackField';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

fetch("/spotifyToken")
    .then(res => res.json())
    .then(token => {
        spotify.setAccessToken(token)
    })

function App() {
    const [tracks, setTracks] = useState([]);

    const getRecomendations = () => {
        fetch("/api")
            .then(res => res.json())
            .then(({itemList}) => {
                spotify
                    .getTracks(itemList.map(item => item.itemId))
                    .then(data => setTracks(data.tracks));
            })
    }

    console.log(tracks);

    return (
        <div className="App">
            <div className="container">
                <header className="header">
                    <h1 className="header__title title title--L">Рекомендуемые песни</h1>
                </header>
                <div className="menu">
                    <div className="menu__inner">
                        <button id="button" onClick={getRecomendations} className="button button--theme-green">Получить
                            рекомендации
                        </button>
                    </div>
                </div>
                <div className="songs-list">
                    {
                        tracks.map((track, index) =>
                            <TrackField
                                key={track.id}
                                url={track.external_urls.spotify}
                                number={index + 1}
                                image={track.album.images[0].url}
                                name={track.name}
                                artists={track.artists.map(artist => artist.name).join(', ')}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
