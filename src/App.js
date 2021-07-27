import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import data from './data';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  const movies = data;
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;
