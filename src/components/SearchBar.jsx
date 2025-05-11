import React, { useState, useContext } from 'react';
import { TextField, Button, Box, useMediaQuery } from '@mui/material';
import { MovieContext } from '../context/MovieContext';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const { setSearchTerm } = useContext(MovieContext); // Use setSearchTerm
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm')); // Check for small screen

  const handleSearch = () => {
    onSearch(query);
    setSearchTerm(query); // Update the search term
  };

  return (
    <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap={2} my={2}>
      <TextField
        fullWidth
        label="Search movies"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ mb: isSmallScreen ? 2 : 0 }} // Margin-bottom for small screens
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{ alignSelf: isSmallScreen ? 'flex-start' : 'center' }} // Align button on small screens
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
