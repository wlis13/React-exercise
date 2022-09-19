import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>início Aula Mocks e Inputs</h1>
        <Link to="/search">vá para a pagina search</Link>
      </div>
    );
  }
}

export default Home;
