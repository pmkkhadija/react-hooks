import React, { useState } from 'react';
import App from './App'
import './App.css';
import MovieList from './Movielist';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
      rating: 9.2
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      rating: 9.0
    },
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      posterURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
      rating: 8.9
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleFilterChange = event => {
    setTitleFilter(event.target.value);
  };

  const handleRatingFilterChange = event => {
    setRatingFilter(parseFloat(event.target.value));
  };

  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(titleFilter.toLowerCase()) && movie.rating >= ratingFilter;
  });

  const handleAddMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'This is a new movie.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 5.0
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <button onClick={handleAddMovie}>Add Movie</button>
      <Filter titleFilter={titleFilter} ratingFilter={ratingFilter} onTitleFilterChange={handleTitleFilterChange} onRatingFilterChange={handleRatingFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  ); 
}
export default App;
