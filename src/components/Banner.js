import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import requests from '../api/request';
import "./Banner.css";
import styled from 'styled-components';

const Banner = () => {

  // const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: {
        append_to_response: 'videos',
      },
    });
    setMovie(movieDetail);

  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n) + "..." : str;
  }

  if (isClicked) {
    return (
      <div>
        <Conatiner>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              frameboarder="0"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Conatiner>
        <button onClick={() => setIsClicked(false)}>
          X
        </button>
      </div>
    )
  }
  else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
      >
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className='banner__buttons'>
            {movie?.videos?.results[0]?.key &&
              <button
                className='banner__button play'
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>}
          </div>
          <h1 className='banner__description'>
            {truncate(movie.overview, 100)}
          </h1>
        </div>
        <div className='banner--fadeBottom' />
      </header>
    )
  }


}



export default Banner

const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 60vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
`