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

const Subtitle = styled.div`
  font-size: 18px;
  margin: 24px 0 60px;
  color: white;
  ${DefaultStyles}
`;


function Logo(props) {
  return (
    <div>
      <div>
        <Platzi>Platzi</Platzi>
        <Music>Music</Music>
      </div>
      <Subtitle>
        Tu música sin límites
      </Subtitle>
    </div>
  );
}

export default Logo;