import React from 'react';
import styled from 'styled-components';

const Subtitle = styled.div`
  font-size: 18px;
  margin: 24px 0 60px;
  color: white;
`;

function Logo(props) {
  return (
    <div>
      <Subtitle>
        Tu música sin límites
      </Subtitle>
    </div>
  );
}

export default Logo;
