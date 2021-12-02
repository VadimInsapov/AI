import React, { useState, useEffect } from 'react';
import TrackField from './TrackField';
import SpotifyWebApi from 'spotify-web-api-js'

const ids = ['3dtBVBClM5ms0qCBBrqpUb', '3U8Ev1gISsx6O1uwpsttOD', '44aN5xKL3kGHvQ5bXVk6B8', '73jGEWVGc5OPZ4e1SEIXT3'];

const spotify = new SpotifyWebApi();
spotify.setAccessToken('BQBUZyAlp2fAHJ_fIRstNRT1INynrRaSVzoQHVkpREa7QFdodzYuylOQbNKwcC_HzPVco9yRVbx9XnH1w4A');

function App() {
  const [tracks, setTracks] = useState([]);

  const getRecomendations = () => {
    spotify
      .getTracks(ids)
      .then(data => {
        setTracks(data.tracks);
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
            <button id="button" onClick={getRecomendations} className="button button--theme-green">Получить рекомендации</button>
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
