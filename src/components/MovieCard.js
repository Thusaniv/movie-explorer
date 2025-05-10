import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
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
    <Card sx={{ width: 200, cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onClick={() => navigate(`/movie/${movie.id}`)}
      />
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2">{movie.release_date?.split('-')[0]} | ⭐ {movie.vote_average}</Typography>
        <IconButton onClick={toggleFavorite} color={isFavorite ? 'error' : 'default'}>
          <FavoriteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default MovieCard;