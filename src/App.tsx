import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom"
import theme from "./styles/theme";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
