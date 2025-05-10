import React, { useState, useContext } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { MovieContext } from '../context/MovieContext';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const { setSearchTerm } = useContext(MovieContext); // Use setSearchTerm

  const handleSearch = () => {
    onSearch(query);
    setSearchTerm(query); // Update the search term
  };

  return (
    <Box display="flex" gap={2} my={2}>
      <TextField fullWidth label="Search movies" variant="outlined" value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
    </Box>
  );
};

export default SearchBar;
