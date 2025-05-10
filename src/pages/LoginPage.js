import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy authentication logic
    if (username && password) {
      localStorage.setItem('user', username);
      localStorage.setItem('password', password);
      navigate('/');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <Typography variant="h4" mb={3}>Login</Typography>
      <TextField label="Username" value={username} onChange={e => setUsername(e.target.value)} margin="normal" />
      <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} margin="normal" />
      <Button variant="contained" onClick={handleLogin} sx={{ mt: 2 }}>Login</Button>
    </Box>
  );
};

export default LoginPage;
