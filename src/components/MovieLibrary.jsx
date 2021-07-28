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

  onSearchTextChange() {
    // const { movies } = this.props;
    // const { searchText } = this.props;
    // if (target === "" || !target) {
    //   this.setState({ movies: movies, });
    // }
    // else {
    //   this.setState({ searchText: target.value, });
    //   const skip = "";
    //   const filtered = movies.filter((movie) => {
    //   if (movie.title.includes(searchText)) {
    //     return movie;
    //   }
    //   if (movie.subtitle.includes(searchText)) {
    //     return movie;
    //   }
    //   if (movie.storyline.includes(searchText)) {
    //     return movie;
    //   }
    //   return skip;
    //   });
    //   this.setState({ movies: filtered, });
    // }
  }

  onBookmarkedChange() {
    // const { movies } = this.props;
    // const { bookmarkedOnly } = this.state;
    // const filtered = movies.filter((movie) => movie.bookmarked);
    // bookmarkedOnly ? this.setState({ bookmarkedOnly: false, }) : this.setState({ bookmarkedOnly: true, });
    // !bookmarkedOnly ? this.setState({ movies: filtered, }) : this.setState({ movies: movies, });
  }

  onSelectedGenreChange() {
    // this.setState({ selectedGenre: target.value, });
    // console.log(target.value);
    // const { movies } = this.props;
    // const { selectedGenre } = this.state;
    // console.log(selectedGenre);
    // if (target.value === "") {
    //   this.setState({ movies: movies, });
    // } else {
    //   const skip = "";
    //   const filtered = movies.filter((movie) => movie.genre === selectedGenre ? movie : skip);
    //   this.setState({ movies: filtered });
    // }
  }

  onClick() {
    // const { movies } = this.props;
    // movies.push(movie);
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
          movies={ movies }
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
