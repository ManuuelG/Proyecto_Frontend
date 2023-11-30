import React, { useState, useEffect } from 'react'
import { Box, IconButton } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import axios from 'axios'

const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/keyboard'

const PlayCircleButton = () => {
  const [soundUrl, setSoundUrl] = useState([])

  useEffect(() => {
    axios.get(baseUrl).then(({ data }) => setSoundUrl(data[0]))
  }, [])

  const handleSound = event => {
    console.log('MANUE PAGA LA COCA')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: '20px',
      }}
    >
      <IconButton onClick={handleSound} color="primary">
        <PlayCircleIcon
          fontSize="large"
          sx={{ fontSize: '4em', marginTop: '-85px', paddingRight: '60px' }}
        />
      </IconButton>
    </Box>
  )
}

export default PlayCircleButton
