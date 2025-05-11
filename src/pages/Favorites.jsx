import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import { Grid, Typography, Container } from '@mui/material';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <>
      <Navbar activeTab="favorites" />
      <Container>
        <Typography variant="h4" m={2}>
          Your Favorite Movies
        </Typography>
        <Grid container spacing={2} px={2}>
          {favorites.length > 0 ? (
            favorites.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))
          ) : (
            <Typography m={2}>No favorites saved yet.</Typography>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Favorites;
