import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // import motion
import bgImage from '../components/cinema-with-popcorn-box.jpg'

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('user', JSON.stringify({ username }));
        navigate('/');
      } else {
        setError('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // push card to right
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 8,
      }}
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }} // start off-screen left & invisible
        animate={{ x: 0, opacity: 1 }}   // slide to 0 & fade in
        transition={{ type: 'spring', stiffness: 70, duration: 0.8 }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            width: 400,
            borderRadius: 3,
            boxShadow: '0px 10px 30px rgba(0,0,0,0.3)',
            ml: 25,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2575fc' }}>
             Your Movie Adventure Awaits
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Please login to continue
            </Typography>
          </Box>
          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            autoComplete="username"
            sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            autoComplete="current-password"
            sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
          />
          {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
            }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Forgot your password?
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default LoginPage;
