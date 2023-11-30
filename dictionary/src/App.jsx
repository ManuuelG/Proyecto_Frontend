import React, { useState } from 'react'
import { Box } from '@mui/material'
import Navbar from './Components/Navbar/navbar'
import Body from './Components/Body/body'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [themeMode, setThemeMode] = useState('light')

  const handleSearch = term => {
    setSearchTerm(term)
  }

  const handleThemeChange = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <Box
      sx={{
        height: 'auto',

        backgroundColor: themeMode === 'dark' ? '#303030' : '#ffffff',
        color: themeMode === 'dark' ? '#ffffff' : '#000000',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <Navbar onSearch={handleSearch} onThemeChange={handleThemeChange} />

      <Body searchTerm={searchTerm} />
    </Box>
  )
}

export default App
