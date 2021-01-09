import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 100vh;

  h1 {
    text-align: center;

    font-size: 56px;
    color: #1d3557;

    @media (max-width: 800px) {
      font-size: 42px;
    }
  }

  form {
    margin: 25px 0;
    display: flex;
    flex-direction: column;

    align-items: center;

    input[type='email'],
    input[type='password'] {
      width: 350px;
      height: 50px;

      border: none;
      border-radius: 10px;

      padding-left: 10px;
      margin-bottom: 15px;

      background: #a8dadc;
      color: #1d3557;

      font-size: 20px;
      font-weight: 550;

      @media (max-width: 800px) {
        width: 100%;
        height: 50px;

        font-weight: 400;
      }

      :focus {
        border-radius: 10px;
        border: 1px solid #1d3557;

        background-color: white;
        color: #1d3557;
      }
    }

    button {
      width: 350px;
      height: 50px;

      border: none;
      border-radius: 10px;

      background: #457b9d;
      color: #f1faee;

      cursor: pointer;

      @media (max-width: 800px) {
        width: 100%;
        height: 50px;

        font-weight: 400;
      }
    }
  }
`;
