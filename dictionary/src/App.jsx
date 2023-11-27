import Navbar from './Components/Navbar/navbar'

import { Container, Box } from '@mui/material/'

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ border: '3px solid red', height: '100vh' }}>
        <Navbar />
      </Box>
    </Container>
  )
}

export default App
