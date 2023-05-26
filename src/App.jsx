import { ThemeProvider } from "styled-components"
import ChessBoard from "./components/ChessBoard"
import GlobalStyle from "./components/styles/Global"

const theme = {
  background: "#14213d",
  light: "white",
  alt: "gray"
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ChessBoard />
        {/* <h1>Chess Board</h1> */}
      </>
    </ThemeProvider>
  )
}

export default App
