import { render, screen } from '@testing-library/react';
import App from './App';

describe('testes aula mocks input', () => {

  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/componente App/i);
    expect(linkElement).toBeInTheDocument();
  });

  it(() => {

  })

  it(() => {

  })

  it(() => {

  })

  it(() => {

  })

});