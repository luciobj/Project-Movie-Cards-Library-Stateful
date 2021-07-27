import React from 'react';
import PropTypes from 'prop-types';

class StoryInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StoryInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
};

export default StoryInput;
