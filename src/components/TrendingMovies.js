import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import MovieCard from './MovieCard';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
      setMovies(res.data.results);
    };
    fetchTrending();
  }, []);

  return (
    <>
      <Typography variant="h5" mt={2} mb={1}>Trending Movies</Typography>
      <Grid container spacing={2}>
        {movies.map(movie => (
          <Grid item key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TrendingMovies;