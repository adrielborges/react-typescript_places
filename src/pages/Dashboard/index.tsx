import React from 'react';

import { CgProfile } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';

import { Container, NavBar, ContainerMap } from './styles';

import MapView from '../../components/MapView/index';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <span>
          <FiMenu />
        </span>

        <span>
          <input type="text" name="" id="" placeholder=" Search Bar" />
        </span>

        <span>
          <CgProfile />
        </span>
      </NavBar>

      <MapView />
    </Container>
  );
};

export default Dashboard;
