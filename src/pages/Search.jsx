import React, { Component } from 'react';
import searchApi from '../api';
import RenderApi from './RenderApi';

class Search extends Component {
  state = {
    valueTarget: '',
    responseImage: '',
    responseName: '',
    responseId: '',
  };

  handleChange = (event) => {
    const target = event.target.value;
    this.setState({ valueTarget: target });
  };

  handleClick = async () => {
    const { valueTarget } = this.state;
    const returnApi = await searchApi(valueTarget);
    this.setState({
      responseImage: returnApi.sprites.front_default,
      responseName: returnApi.name,
      responseId: returnApi.id,
    });
  };

  render() {
    const { responseImage, responseName, responseId } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor="input-text">
            digite no campo de busca:
            <input
              onChange={this.handleChange}
              type="text"
              id="input-text"
              placeholder="Pesquisar"
            />
            <button onClick={this.handleClick} type="button">
              search
            </button>
            <RenderApi
              image={responseImage}
              name={responseName}
              id={responseId}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
