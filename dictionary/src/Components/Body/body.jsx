import { Typography, Divider, Box } from '@mui/material'
import Play from '../PlayButton/play'

import { useEffect, useState } from 'react'
import axios from 'axios'

function Body({ searchTerm }) {
  const [wordData, setWordData] = useState({})

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then(response => {
          setWordData(response.data[0])
        })
        .catch(error => {
          console.error('Error fetching word data', error)
        })
    }
  }, [searchTerm])

  console.log(wordData)

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Alinea los elementos a la derecha y a la izquierda
        marginTop: '63px',
      }}
    >
      <Typography
        sx={{
          marginLeft: '40px',
          fontSize: '64px',
          fontWeight: '700',
        }}
      >
        {wordData.word}
      </Typography>

      {wordData.phonetics && wordData.phonetics.length > 0 && (
        <Play />
      )}
    </Box>

    <Typography
      sx={{
        marginLeft: '40px',
        marginTop: '8px',
        fontSize: '24px',
        color: '#A445ED',
      }}
    >
      {wordData.phonetics &&
        wordData.phonetics.find(phonetic => phonetic.text) &&
        wordData.phonetics.find(phonetic => phonetic.text).text}
    </Typography>

      <Typography
        sx={{
          paddingLeft: '60px',
          marginTop: '15px',
          fontSize: '18px',
          '& li': {
            marginBottom: '13px',
          },
        }}
      >
        {wordData.meanings &&
          wordData.meanings
            .filter(meaning => meaning.partOfSpeech === 'noun')
            .map((meaning, index) => (
              <div key={index}>
                <Typography
                  sx={{
                    paddingLeft: '40px',
                    fontSize: '24px',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    marginTop: '40px',
                  }}
                >
                  {meaning.partOfSpeech}
                </Typography>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{ marginLeft: '120px', marginTop: '-13px' }}
                />
                <Typography
                  sx={{
                    paddingLeft: '40px',
                    fontSize: '20px',
                    marginTop: '40px',
                    color: '#757575',
                  }}
                >
                  Meaning
                </Typography>
                <ul>
                  {meaning.definitions.map((definition, definitionIndex) => (
                    <li key={definitionIndex}>
                      {definition.definition}
                      {definition.example && (
                        <p>Example: {definition.example}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
      </Typography>

      <Typography
        sx={{
          color: '#757575',
          paddingLeft: '40px',
          fontSize: '20px',
          fontWeight: 400,
          marginTop: '40px',
        }}
      >
        Synonyms
      </Typography>

      <Typography
        sx={{
          color: '#A445ED',
          paddingLeft: '150px',
          marginTop: '-30px',
          fontSize: '20px',
          fontWeight: 700,
        }}
      >
        electronic keyboard
      </Typography>

      {/* ----------------------------------------------------------------------------------- */}

      <Typography
        variant="body2"
        sx={{
          paddingLeft: '40px',
          fontSize: '24px',
          fontStyle: 'italic',
          fontWeight: 700,
          marginTop: '40px',
        }}
      >
        verb
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ marginLeft: '120px', marginTop: '-16px' }}
      />

      <Typography
        sx={{
          paddingLeft: '40px',
          fontSize: '20px',
          marginTop: '40px',
          color: '#757575',
        }}
      >
        Meaning
      </Typography>

      <Typography
        sx={{
          paddingLeft: '60px',
          marginTop: '15px',
          fontSize: '18px',
          '& li': {
            marginBottom: '13px',
          },
        }}
      >
        {wordData.meanings &&
          wordData.meanings
            .filter(meaning => meaning.partOfSpeech === 'verb')
            .map((meaning, index) => (
              <div key={index}>
                <p>Part of Speech: {meaning.partOfSpeech}</p>
                <ul>
                  {meaning.definitions.map((definition, definitionIndex) => (
                    <li key={definitionIndex}>
                      {definition.definition}
                      {definition.example && (
                        <p>Example: {definition.example}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
      </Typography>

      <Typography
        sx={{
          paddingLeft: '85px',
          marginTop: '15px',
          fontSize: '18px',
          color: '#757575',
        }}
      >
        “Keyboarding is the part of this job I hate the most.”
      </Typography>

      <Divider orientation="horizontal" flexItem sx={{ marginTop: '40px' }} />

      <Typography
        sx={{
          paddingLeft: '40px',
          fontSize: '14px',
          marginTop: '15px',
          color: '#757575',
          textDecoration: 'underline',
        }}
      >
        Source
      </Typography>

      <Typography
        sx={{
          paddingLeft: '100px',
          fontSize: '14px',
          marginTop: '-21px',
          color: '#2D2D2D',
          textDecoration: 'underline',
        }}
      >
        Esto tiene que ser el enlace
      </Typography>
    </>
  )
}
export default Body
