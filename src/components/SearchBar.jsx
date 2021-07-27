import { set } from 'lodash';
import { Components } from 'react';
import { setSyntheticTrailingComments } from 'typescript';

class SearchBar extends Components {
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
    <div>
      <form data-testid="search-bar-form">
        Search Bar
        <label data-testid="text-input-label">Inclui o texto:
          <input data-testid="text-input" type='search' value={ searchText } onChange={ onSearchTextChange } />
        </label>
        <label data-testid="checkbox-input-label">Mostrar somente favoritos
          <input data-testid="checkbox-input" type='checkbox' value={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        </label>
      </form>
    </div>
  }
}