import { Typography } from '@mui/material'
import { Box } from '@mui/material'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Body1({ searchTerm }) {
  const [wordData, setWordData] = useState('')

  useEffect(() => {
    // Realizar la llamada a la API al cambiar la palabra de búsqueda
    if (searchTerm) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then(response => {
          // Actualizar el estado con los datos de la palabra
          setWordData(response.data[0])
        })
        .catch(error => {
          console.error('Error fetching word data', error)
          // Manejar errores según sea necesario
        })
    }
  }, [searchTerm])
  return (
    <>
      <Box sx={{ border: '1px solid green' }}>
        {' '}
        <Typography
          variant="h2"
          style={{ paddingLeft: '40px', marginTop: '20px' }}
          fontWeight="bold"
        >
          Palabra: {wordData.word}
          Definicion: {wordData.meanings[0].definitions[0].definition}
        </Typography>
      </Box>
    </>
  )
}
export default Body1
