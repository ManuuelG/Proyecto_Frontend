import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/navbar'
import Body from './Components/Body/body'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [themeMode, setThemeMode] = useState('light')
  const [selectedFont, setSelectedFont] = useState('sans-serif')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setThemeMode(savedTheme)
    }
  }, [])

  const handleSearch = term => {
    setSearchTerm(term)
  }

  const handleThemeChange = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light'
    setThemeMode(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const handleFontChange = font => {
    setSelectedFont(font)
  }

  useEffect(() => {
    document.documentElement.style.backgroundColor =
      themeMode === 'dark' ? '#050505' : '#ffffff'
    document.documentElement.style.color =
      themeMode === 'dark' ? '#ffffff' : '#000000'
  }, [themeMode])

  return (
    <>
      <Navbar
        onSearch={handleSearch}
        onThemeChange={handleThemeChange}
        onFontChange={handleFontChange}
        selectedFont={selectedFont}
        themeMode={themeMode}
      />

      <Body searchTerm={searchTerm} selectedFont={selectedFont} />
    </>
  )
}

export default App
