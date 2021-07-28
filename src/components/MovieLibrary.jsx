import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    if (target.value === '' || !target.value) {
      this.setState({ searchText: '' });
      this.setState({ movies });
    } else {
      this.setState({ searchText: target.value });
      const skip = '';
      const filtered = movies.filter((movie) => {
        if (movie.title.includes(target.value)) {
          return movie;
        }
        if (movie.subtitle.includes(target.value)) {
          return movie;
        }
        if (movie.storyline.includes(target.value)) {
          return movie;
        }
        return skip;
      });
      this.setState({ movies: filtered });
    }
  }

  onBookmarkedChange() {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    const filt = movies.filter((movie) => movie.bookmarked);
    if (bookmarkedOnly) {
      this.setState({ bookmarkedOnly: false });
    } else {
      this.setState({ bookmarkedOnly: true });
    }
    if (!bookmarkedOnly) {
      this.setState({ movies: filt });
    } else {
      this.setState({ movies });
    }
    // Solucao mais elegante:
    // bookmarkedOnly ? this.setState({ bookmarkedOnly: false }) : this.setState({ bookmarkedOnly: true });
    // !bookmarkedOnly ? this.setState({ movies: filt }) : this.setState({ movies: movies });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
    const { movies } = this.props;
    if (target.value === '') {
      this.setState({ movies });
    } else {
      const skip = '';
      const filter = movies.filter((movie) => {
        // (movie.genre === target.value) ? movie : skip;
        if (movie.genre === target.value) {
          return movie;
        }
        return skip;
      });
      this.setState({ movies: filter });
    }
  }

  onClick(movie) {
    const { movies } = this.state;
    const newList = [
      ...movies,
      movie,
    ];
    this.setState({ movies: newList });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
