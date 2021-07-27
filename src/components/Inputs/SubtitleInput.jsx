import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
};

export default SubtitleInput;
