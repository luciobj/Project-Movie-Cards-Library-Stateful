import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Caminho da imagem
        <input
          data-testid="image-input"
          name="imagePath"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
};

export default ImageInput;
