import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';

const FilterBar = ({ onFilter }) => {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const handleApplyFilters = () => {
    onFilter({ genre, year, rating, showFavorites });
  };

  return (
    <Box display="flex" alignItems="center" gap={2} my={2} flexWrap="wrap">
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Genre</InputLabel>
        <Select value={genre} label="Genre" onChange={(e) => setGenre(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="28">Action</MenuItem>
          <MenuItem value="35">Comedy</MenuItem>
          <MenuItem value="18">Drama</MenuItem>
          <MenuItem value="27">Horror</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel>Year</InputLabel>
        <Select value={year} label="Year" onChange={(e) => setYear(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          {[2024, 2023, 2022, 2021].map((yr) => (
            <MenuItem key={yr} value={yr}>{yr}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} label="Rating" onChange={(e) => setRating(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="8">8+</MenuItem>
          <MenuItem value="7">7+</MenuItem>
          <MenuItem value="6">6+</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            checked={showFavorites}
            onChange={(e) => setShowFavorites(e.target.checked)}
          />
        }
        label="Favorites only"
      />

      <Button variant="contained" onClick={handleApplyFilters}>
        Apply
      </Button>
    </Box>
  );
};

export default FilterBar;
