import { ThemeProvider } from "styled-components"
// import ChessBoard from "./components/ChessBoard"
import ChessBoard  from "./components/Board"
import GlobalStyle from "./components/styles/Global"

const theme = {
  background: "#14213d",
  light: "lightgreen",
  alt: "brown",
  border: "black",
  selected: "blue"
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {/* <ChessBoard /> */}
        <ChessBoard />
        {/* <h1>Chess Board</h1> */}
      </>
    </ThemeProvider>
  )
}

export default App
