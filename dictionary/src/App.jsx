import Body from './Components/Body/body'
import { Container, Box } from '@mui/material'
import { useState } from 'react'
import Navbar from './Components/Navbar/navbar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = term => {
    setSearchTerm(term)
  }

  return (
    <Container maxWidth="auto">
      <Box sx={{ height: 'auto' }}>
        <Navbar onSearch={handleSearch} />
        <Body searchTerm={searchTerm} />
      </Box>
    </Container>
  )
}

export default App
