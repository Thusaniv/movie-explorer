import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import { Grid, Typography } from '@mui/material';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <>
      <Typography variant="h4" m={2}>Your Favorite Movies</Typography>
      <Grid container spacing={2} px={2}>
        {favorites.length > 0 ? (
          favorites.map(movie => (
            <Grid item xs={6} md={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <Typography m={2}>No favorites saved yet.</Typography>
        )}
      </Grid>
    </>
  );
};

export default Favorites;
