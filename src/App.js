import Header from "./components/Header/Header.components";
import { ThemeProvider } from "styled-components";
import GlobalStyleSheet from "./components/Styles/global.styles";
import { Container } from "./components/Styles/container.styles";
function App() {

  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#ffffff",
      footer: "#003333"
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyleSheet />
        <Header></Header>
        <Container>
          <h3>Hello World</h3>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
