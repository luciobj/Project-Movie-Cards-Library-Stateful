import React from 'react';
import PropTypes from 'prop-types';

class GenderInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriler">Suspense</option>
        </select>
      </label>
    );
  }
}

GenderInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
};

export default GenderInput;
