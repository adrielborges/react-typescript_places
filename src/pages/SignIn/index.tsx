import React, { FormEvent, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      handleSignIn();
      history.push('/dashboard');
    } catch (error) {
      alert(error);
    }
  };

  const handleSignIn = () => {
    console.log('sign in');
  };

  return (
    <Container>
      <h1>Faça seu cadastro</h1>

      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="Email"
          placeholder="Email"
          value={email}
          onChange={() => {
            setEmail(email);
          }}
        />
        <input type="Password" placeholder="Password" />

        <button type="submit">CADASTRAR</button>
      </form>

      <Link to="/">voltar</Link>
    </Container>
  );
};

export default SignIn;
