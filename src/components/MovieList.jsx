import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies found</div>;
  }

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
