import Body2 from "./Components/Body/body2"
import {Container, Box } from "@mui/material"

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ border: '3px solid red', height: '100vh' }}>
        <Body2/>
      </Box>
    </Container>
  )
}

export default App
