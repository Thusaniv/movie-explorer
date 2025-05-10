import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { MovieContext } from '../context/MovieContext';
import MovieCard from './MovieCard';

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <>
      <Typography variant="h5" mt={2} mb={1}>Your Favorites</Typography>
      <Grid container spacing={2}>
        {favorites.map(movie => (
          <Grid item key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Favorites;
