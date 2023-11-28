import Navbar from './Components/Navbar/navbar'
import Body1 from './Components/Body/body1'

import { useState } from 'react'

import { Container, Box } from '@mui/material/'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = term => {
    setSearchTerm(term)
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ border: '3px solid red', height: '100vh' }}>
        <Navbar onSearch={handleSearch} />
        <Body1 searchTerm={searchTerm} />
      </Box>
    </Container>
  )
}

export default App
