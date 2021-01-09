import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

// import { Container } from './styles'

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
};

export default App;
