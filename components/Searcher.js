import React from 'react';
import styled from 'styled-components';

const DefaultStyles = `
  outline: 0;
  border: none;
  border-radius: 4px;
`;

const Form = styled.form`
  display: flex;
  font-weight: bold;
  font-family: 'Quicksand';
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const InputSearcher = styled.input`
  flex: 1;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  ${DefaultStyles}
  @media (max-width: 1024px) {
    margin-right: 0;
  }
`;

const Button = styled.button`
  ${DefaultStyles}
  background: #ea83ee;
  padding: 0.5rem 46px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  font-family: 'Quicksand';
  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
`;

// es invocado desde Hero
function Searcher(props) {
  return(
    <Form onSubmit={props.onSubmit}>
      <InputSearcher
        name="buscar"
        type="text"
        placeholder="Busca por canción, artista o álbum"
      />
      <Button>Buscar</Button>
    </Form>
  );
}

export default Searcher;
