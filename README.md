# Movie Explorer App

## Overview
The **Movie Explorer App** is a web application designed to help users explore and manage their favorite movies. It allows users to search for movies, view detailed information about them, and add or remove movies from their favorites list. Additionally, the app supports a dark mode feature and user authentication, ensuring that only logged-in users can access the favorites section.

This project is built with **React**, **Material UI**, and uses **React Router** for navigation. The movie data is fetched from an external movie API, such as **TMDb**.

## Features
- **Search for Movies**: Users can search for movies by title and view the results.
- **Favorite Movies**: Users can add movies to a personal favorites list and view them later.
- **Movie Details**: Users can view detailed information about each movie (e.g., synopsis, release date, ratings).
- **Dark Mode**: Users can toggle between dark and light themes for a better viewing experience.
- **User Login**: Secure login mechanism to allow users to access protected features, such as viewing their favorites.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework to design the app’s user interface.
- **React Router**: A library for handling navigation and routing within the app.
- **Context API**: For managing global state (e.g., movies, favorites, theme, search term).
- **TMDb API (The Movie Database)**: A public API to fetch movie data (can be replaced with any other API if needed).
- **CSS-in-JS**: Material UI’s styling solution.
  
## Getting Started

### Prerequisites
Before you begin, make sure you have **Node.js** and **npm** installed on your machine.

- **Node.js** version 14.x or higher
- **npm** version 6.x or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://gitlab.com/your-username/movie-explorer-app.git
   cd movie-explorer-app
