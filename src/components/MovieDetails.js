import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,credits`);
      setMovie(res.data);
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <Typography>Loading...</Typography>;

  const trailer = movie.videos.results.find(v => v.type === 'Trailer');

  return (
    <Box p={2}>
      <Typography variant="h4">{movie.title}</Typography>
      <Typography variant="body1">{movie.overview}</Typography>
      <Typography variant="body2">Genres: {movie.genres.map(g => g.name).join(', ')}</Typography>
      {trailer && (
        <Box mt={2}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Trailer"
            allowFullScreen
          ></iframe>
        </Box>
      )}
    </Box>
  );
};

export default MovieDetails;