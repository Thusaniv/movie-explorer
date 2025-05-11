import React, { createContext, useContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('lastSearch') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('user') ? true : false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    };


  useEffect(() => {
    localStorage.setItem('lastSearch', searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

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

  const login = (user) => {
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(user)); // Store user data
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('user'); // Remove user data
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        favorites,
        addFavorite,
        removeFavorite,
        darkMode,
        toggleDarkMode,
        setDarkMode,
        searchTerm,
        setSearchTerm,
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
