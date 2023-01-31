import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../Interfaces/MoveInterfaces';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

    const getMovies=async()=>{
        const resp=await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setPeliculasEnCine(resp.data.results);
        setIsLoading(false);
    }
    useEffect(() => {
        getMovies();
        
      }, [])
  return {
    peliculasEnCine,
    isLoading
}
  
}
