import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="genre-input"
          name="rating"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
};

export default RatingInput;
