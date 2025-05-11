import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle login logic
  const handleLogin = async () => {
    // Clear any previous error messages
    setError('');
    setLoading(true);

    // Simulate an API call for login (replace this with actual API request)
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        // If credentials are correct, store user data in localStorage
        localStorage.setItem('user', JSON.stringify({ username }));
        navigate('/');  // Redirect to home page
      } else {
        setError('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          autoComplete="username"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          autoComplete="current-password"
        />
        {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
