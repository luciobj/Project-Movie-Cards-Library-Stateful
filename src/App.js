import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import data from './data'

function App() {
  const movies = data;
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies }/>
    </div>
  );
}

export default App;
