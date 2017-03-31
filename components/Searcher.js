import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  font-weight: bold;
  font-family: 'Quicksand';
`;

const DefaultStyles = `
  outline: 0;
  border: none;
  border-radius: 4px;
`;

const InputSearcher = styled.input`
  flex: 1;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  ${DefaultStyles}
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
`;


function Searcher(props) {
  return(
    <Form>
      <InputSearcher type="text" placeholder="Busca por canción, artista o álbum" />
      <Button>Buscar</Button>
    </Form>
  );
}

export default Searcher;