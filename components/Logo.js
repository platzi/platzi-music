import React from 'react';
import styled from 'styled-components';

const DefaultStyles = `
  font-family: 'Quicksand';
`;

const LogoStyles = `
  font-weight: bold;
  font-size: 3rem;
  ${DefaultStyles}
`;

const Platzi = styled.span`
  color: white;
  ${LogoStyles}
`;

const Music = styled.span`
  color: #bfafd9;
  ${LogoStyles}
`;

const Title = styled.div`
  margin-bottom: 1em;
`

function Logo(props) {
  return (
    <div>
      <Title>
        <Platzi>Platzi</Platzi>
        <Music>Music</Music>
      </Title>
    </div>
  );
}

export default Logo;
