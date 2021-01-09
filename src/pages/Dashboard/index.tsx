import React from 'react';

import { Container, NavBar, ContainerMap } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <span>sanduiche</span>

        <span>
          <input type="text" name="" id="" placeholder=" Search Bar" />
        </span>

        <span>avatar</span>
      </NavBar>

      <ContainerMap>o MAPA</ContainerMap>
    </Container>
  );
};

export default Dashboard;
