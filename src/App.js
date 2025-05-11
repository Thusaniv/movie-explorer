import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetails from './components/MovieDetails';
import Favorites from './pages/Favorites';
import LoginPage from './pages/LoginPage';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { MovieContext } from './context/MovieContext';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const { darkMode } = useContext(MovieContext);


  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
