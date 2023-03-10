import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[],
  popular: Movie[],
  topRate: Movie[],
  upcoming: Movie[];
  
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [moviesState, setMoviesState] = useState<MoviesState>({
      nowPlaying: [],
      popular: [],
      topRate: [],
      upcoming: [],
      
    });

    const getMovies = async () => {
        const nowPlayingPromise = await movieDB.get<MovieDBResponse>('/now_playing');
        const popularPromise = await movieDB.get<MovieDBResponse>('/popular');
        const topRatePromise = await movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingPromise   = movieDB.get<MovieDBResponse>('/upcoming');

        const resps = await Promise.all([
          nowPlayingPromise,
          popularPromise,
          topRatePromise,
          upcomingPromise,
        ]);

        setMoviesState({
          nowPlaying: resps[0].data.results,
          popular: resps[1].data.results,
          topRate: resps[2].data.results,
          upcoming: resps[3].data.results,
        })

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

  return {
    ...moviesState,
    isLoading,
  }
}

