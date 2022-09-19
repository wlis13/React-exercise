import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('início de testes da primeira aula',() => {

  it('01testa se (1 + 1 = 2)', () => {
    expect(1 + 1).toBe(2)
  });

  it('02testa se o primeiro título está presente na tela', () => {
    render(<App />)
    const title = screen.getByText('Encontre seu produto');
    expect(title).toBeInTheDocument()
  });

  it('03testa se ao clicar no botão search a palavra carregando aparece', () => {
    render(<App />)
    const search = screen.getByText(/search/i)
    userEvent.click(search)

    const title = screen.getByText('Carregando...');
    expect(title).toBeInTheDocument()
  });

  it('04testa se existe um placehouder na barra de busca', () => {
    render(<App />)
    const search = screen.getByPlaceholderText(/digite o nome do produto/i)

    expect(search).toBeInTheDocument()
  });

  it('05testa se existe um input e um botão na tela', () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    const btn = screen.getByRole('button', /search/i)

    expect(input).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
  });

  it('06 testa o resultado de  busca feita na barra de pesquisa', async () => {
    render(<App />)

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, 'tablet');
    userEvent.click(button)

    const firstTitle = await screen.findAllByRole('heading',
    {name:'Apple iPad (9ª Geração) 10.2 Wi-fi 64gb - Cinza-espacial', level: 3}, {timeout: 2000})

    expect(firstTitle[0]).toBeInTheDocument();

  });

  it('07 testa se todos os elemento são: <h3><h3/>', async () => {
    render(<App />)

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, 'tablet');
    userEvent.click(button)

    const elementos = await screen.findAllByRole('heading', {level: 3}, {timeout: 2000})
    console.log(elementos.length)

    elementos.forEach((element) => {
      expect(element).toBeInTheDocument();
    })

  });

  it('08 testa se é encontrada uma imagem expecífica', async () => {
    render(<App />)

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, 'tablet');
    userEvent.click(button)

    const firstImage = await screen.findByRole('img',
    {  name: /apple ipad \(9ª geração\) 10\.2 wi-fi 64gb - cinza-espacial/i}, {timeout: 2000})

    expect(firstImage).toBeInTheDocument();

  });
});

describe('implementar testes no ícone do carrinho',() => {

  it('verifica se existe o ícone na tela',() => {
    render(<App />)

    const icone = screen.getByTestId('icone');
    expect(icone).toBeInTheDocument();
  });
});