// import Body1 from "./Components/Body/body1"
import Body from "./Components/Body/body"
import {Container, Box } from "@mui/material"

import Navbar from './Components/Navbar/navbar'

function App() {
  return (
    <Container maxWidth="auto">
      <Box sx={{ border: '3px solid red', height: '200vh' }}>
        <Navbar/>
        <Body/>
      </Box>
    </Container>
  )
}

export default App
