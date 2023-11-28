// import Body1 from "./Components/Body/body1"
import Body from './Components/Body/body'
import { Container, Box } from '@mui/material'

import Navbar from './Components/Navbar/navbar'

import { Container, Box } from '@mui/material/'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = term => {
    setSearchTerm(term)
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ border: '3px solid red', height: '100vh' }}>
        <Navbar />
      </Box>
    </Container>
  )
}

export default App
