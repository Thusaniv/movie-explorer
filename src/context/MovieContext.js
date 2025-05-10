// src/context/MovieContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('lastSearch') || '');

  useEffect(() => {
    localStorage.setItem('lastSearch', searchTerm);
  }, [searchTerm]);

  const addFavorite = (movie) => {
    setFavorites((prev) => {
      const updated = [...prev, movie];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => {
      const updated = prev.filter((m) => m.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        favorites,
        addFavorite,
        removeFavorite,
        darkMode,
        setDarkMode,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// ✅ ADD THIS:
export const useMovieContext = () => useContext(MovieContext);
