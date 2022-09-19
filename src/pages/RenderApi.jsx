import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Render.css';

class RenderApi extends Component {
  render() {
    const { image, name, id } = this.props;
    return (
      <div className="page-render">
        <h2>{`nome: ${name}`}</h2>
        <img src={image} alt={name} />
        <p>{`id: ${id}`}</p>
      </div>
    );
  }
}

export default RenderApi;

RenderApi.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
