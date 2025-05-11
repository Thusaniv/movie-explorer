import React, { useState, useEffect, useContext } from 'react';
import { Container } from '@mui/material';
import SearchBar from '../components/SearchBar';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import axios from 'axios';
import FilterBar from '../components/FilterBar';
import { MovieContext } from '../context/MovieContext';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [filtersActive, setFiltersActive] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const { favorites } = useContext(MovieContext);

  const onSearch = async (newQuery) => {
    setQuery(newQuery);
    setFiltersActive(false);
    setActiveTab('home');

    if (!newQuery) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          query: newQuery,
        },
      });

      setSearchResults(res.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const onFilter = ({ genre, year, rating, showFavorites }) => {
    let baseMovies = showFavorites ? favorites : trendingMovies;
    let filtered = [...baseMovies];

    if (genre) filtered = filtered.filter((m) => m.genre_ids.includes(Number(genre)));
    if (year) filtered = filtered.filter((m) => m.release_date?.startsWith(year));
    if (rating) filtered = filtered.filter((m) => m.vote_average >= Number(rating));

    setMovies(filtered);
    setFiltersActive(true);
  };

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
          },
        });
        setTrendingMovies(res.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    setQuery('');
    setFiltersActive(false);
    if (tab === 'favorites') {
      setMovies(favorites);
    }
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Add actual logout logic here
  };

  const moviesToDisplay = query
    ? searchResults
    : filtersActive
      ? movies
      : activeTab === 'favorites'
        ? favorites
        : trendingMovies;

  return (
    <>
      <Navbar onSelectTab={handleTabSelect} onLogout={handleLogout} />
      <Container>
        <SearchBar onSearch={onSearch} />
        <FilterBar onFilter={onFilter} />
        {!query && !filtersActive && activeTab === 'home' && (
          <TrendingMovies movies={trendingMovies} />
        )}
        <MovieList movies={moviesToDisplay} loading={loading} />
      </Container>
    </>
  );
};

export default HomePage;
