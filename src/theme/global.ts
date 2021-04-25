import { createGlobalStyle } from 'styled-components';
import palette from './palette';

const GlobalStyle = createGlobalStyle`
  @media(max-width: 1080px){
    html{
        font-size: 93.75%
    }
  }

  @media (max-width: 1366px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(max-width: 720px){
    html{
        font-size: 80%
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${palette.gray50}
  }

  body, input, textarea, button{
      font: 500 1rem Inter, sans-serif;
      color: ${palette.gray500};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: ${palette.gray800};
  }

  h1{
      font-size: 2rem;
  }

  h2 {
      font-size: 1.5rem;
  }

  button{
      cursor: pointer;
  }
`;

export default GlobalStyle;
