import { createGlobalStyle, styled } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme["base-background"]};
    color: ${({ theme }) => theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Nunito", sans-serif;
    line-height: 1.6;
  }

  a {
    text-decoration: none;

    :visited {
      color: inherit;
    }
  }

  .foo {
    white-space: pre-wrap
  }
`

export const Card = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme["base-post"]};
`