import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      onSearchTextChange: '',
      bookmarkedOnly: false,
      onBookmarkedChange: '',
      selectedGenre: '',
      onSelectedGenreChange: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.name]: event.target.value,
    });
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props
    return (
      <section>
        <form data-testid="search-bar-form">
          Search Bar
          <label data-testid="text-input-label">Inclui o texto:
            <input data-testid="text-input" type="search" value={ searchText } onChange={ onSearchTextChange } />
          </label>
          <label data-testid="checkbox-input-label">Mostrar somente favoritos
            <input data-testid="checkbox-input" type="checkbox" value={ bookmarkedOnly } onChange={ onBookmarkedChange } />
          </label>
          <label data-testid="select-input-label">Filtrar por gênero
            <input data-testid="select-input" type="select" value={ selectedGenre } onChange={ onSelectedGenreChange } />
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriler">Suspense</option>
          </label>
        </form>
      </section>
    )
  }
}

export default SearchBar;
