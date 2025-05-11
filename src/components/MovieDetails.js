import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from '@mui/material';
import Navbar from './Navbar'; // Adjust the path as needed

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,credits`
        );
        setMovie(res.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <Typography p={2}>Loading...</Typography>;

  const trailer = movie.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');

  return (
    <>
      <Navbar activeTab="" />

      <Box p={3}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={3}>
            {/* Movie Poster */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="500"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Card>
            </Grid>

            {/* Movie Info */}
            <Grid item xs={12} sm={6} md={8}>
              <CardContent>
                <Typography variant="h4" gutterBottom>{movie.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Release Date: {movie.release_date} | Rating: {movie.vote_average}
                </Typography>
                <Typography variant="body1" paragraph>{movie.overview}</Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  Genres: {movie.genres.map(g => g.name).join(', ')}
                </Typography>
              </CardContent>

              {/* Trailer */}
              {trailer && (
                <Box mt={4}>
                  <Typography variant="h6" gutterBottom>Trailer:</Typography>
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title="Movie Trailer"
                    allowFullScreen
                    style={{ borderRadius: '8px' }}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default MovieDetails;
