import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useContext(MovieContext);

  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ width: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          onClick={() => navigate(`/movie/${movie.id}`)}
          sx={{
            objectFit: 'cover',  // Ensure image covers the area
            height: 300,         // You can control the height if needed
            width: '100%',       // Ensure the image fills the container
          }}
        />
        <CardContent>
          <Typography variant="h8" noWrap>{movie.title}</Typography>
          <Typography variant="body2" noWrap>
            {movie.release_date?.split('-')[0]} | ⭐ {movie.vote_average}
          </Typography>
          <IconButton onClick={toggleFavorite} color={isFavorite ? 'error' : 'default'}>
            <FavoriteIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MovieCard;
