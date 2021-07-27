import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './Inputs/TitleInput';
import SubtitleInput from './Inputs/SubtitleInput';
import ImageInput from './Inputs/ImageInput';
import StoryInput from './Inputs/StoryInput';
import RatingInput from './Inputs/RatingInput';
import GenderInput from './Inputs/GenderInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.name]: event.target.value,
    });
  }

  submit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput value={ title } handleChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } handleChange={ this.handleChange } />
        <ImageInput value={ imagePath } handleChange={ this.handleChange } />
        <StoryInput value={ storyline } handleChange={ this.handleChange } />
        <RatingInput value={ rating } handleChange={ this.handleChange } />
        <GenderInput value={ genre } handleChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.submit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.string.isRequired,
};

export default AddMovie;
