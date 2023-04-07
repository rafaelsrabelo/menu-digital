import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
}

body {
  background: ${props => props.theme.COLORS.WHITE};
  color: ${props => props.theme.COLORS.TEXT};
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`;
