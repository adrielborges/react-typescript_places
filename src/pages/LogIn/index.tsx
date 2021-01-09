import React, { FormEvent, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

const LogIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      localStorage.setItem('@mesa:token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <h1>Login</h1>

      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="Email"
          placeholder="Email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="Password"
          placeholder="Password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">ENTRAR</button>
      </form>

      <Link to="/signin">criar conta</Link>
    </Container>
  );
};

export default LogIn;
