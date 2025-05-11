import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Switch, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ activeTab = 'home' }) => {
  const navigate = useNavigate();
  const { toggleDarkMode } = useContext(MovieContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Movie Explorer
          </Typography>

          <Box display="flex" alignItems="center" gap={2}>
            {/* Desktop version of the navbar buttons */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Button
                color={activeTab === 'home' ? 'secondary' : 'inherit'}
                onClick={() => navigate('/')}
              >
                Home
              </Button>
              <Button
                color={activeTab === 'favorites' ? 'secondary' : 'inherit'}
                onClick={() => navigate('/favorites')}
              >
                Favorites
              </Button>
              <Switch onChange={toggleDarkMode} color="default" />
              <Button color="inherit" onClick={handleLogout} sx={{ ml: 4 }}>
                Logout
              </Button>
            </Box>

            {/* Mobile version of the navbar with hamburger menu */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <IconButton
                color="inherit"
                onClick={toggleDrawer}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <List>
          <ListItem button onClick={() => navigate('/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => navigate('/favorites')}>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
          <ListItem>
            <Switch onChange={toggleDarkMode} color="default" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
