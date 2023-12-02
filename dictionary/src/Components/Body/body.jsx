import { Typography, Divider, Box } from '@mui/material'
import Play from '../PlayButton/play'

import { useEffect, useState } from 'react'
import axios from 'axios'

function Body({ searchTerm, selectedFont }) {
  const [wordData, setWordData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then(response => {
          setWordData(response.data[0])
          setError(null)
        })
        .catch(error => {
          console.error('Error fetching word data', error)
          setError(error)
        })
    }
  }, [searchTerm])

  console.log(wordData)

  return (
    <>
      {error ? (
        <Typography
          variant="h4"
          sx={{
            marginLeft: '300px',
            marginTop: '20px',
            color: 'black',
            fontFamily: selectedFont,
          }}
        >
          😢No encontramos esa palabra.¿Nos sigues queriendo igual?
        </Typography>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '63px',
              fontFamily: selectedFont,
            }}
          ></Box>

          <Box>
            <Typography
              variant="h2"
              sx={{
                marginLeft: '40px',
                fontSize: '64px',
                fontWeight: '700',
                fontFamily: selectedFont,
              }}
            >
              {wordData.word}
            </Typography>
            {wordData.phonetics && wordData.phonetics.length > 0 && (
              <Play data={wordData} />
            )}
          </Box>

          <Typography
            sx={{
              marginLeft: '40px',
              marginTop: '8px',
              fontSize: '24px',
              color: '#A445ED',
              fontFamily: selectedFont,
            }}
          >
            {wordData.phonetics &&
              wordData.phonetics.find(phonetic => phonetic.text) &&
              wordData.phonetics.find(phonetic => phonetic.text).text}
          </Typography>

          <Typography
            sx={{
              paddingLeft: '40px',
              marginTop: '15px',
              fontSize: '18px',
              '& li': {
                marginBottom: '13px',
                fontFamily: selectedFont,
              },
            }}
          >
            {wordData.meanings &&
              wordData.meanings.map((meaning, index) => (
                <Box key={index}>
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontStyle: 'italic',
                      fontWeight: 700,
                      marginTop: '40px',
                      fontFamily: selectedFont,
                    }}
                  >
                    {meaning.partOfSpeech}
                  </Typography>

                  <Divider
                    orientation="horizontal"
                    flexItem
                    sx={{
                      marginLeft: '150px',
                      marginTop: '-15px',
                      backgroundColor: '#3A3A3A',
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: '20px',
                      marginTop: '40px',
                      color: '#757575',
                      fontFamily: selectedFont,
                    }}
                  >
                    Meaning
                  </Typography>

                  <ul>
                    {meaning.definitions.map((definition, definitionIndex) => (
                      <li
                        key={definitionIndex}
                        style={{ listStyleType: 'none' }}
                      >
                        <span
                          style={{
                            color: '#8F19E8',
                            marginRight: '0.5em',
                            fontSize: '1.5em',
                            verticalAlign: 'middle',
                          }}
                        >
                          &bull;
                        </span>
                        <span>{definition.definition}</span>
                      </li>
                    ))}
                  </ul>
                  {meaning.synonyms.length > 0 && (
                    <Typography
                      sx={{
                        color: '#757575',
                        fontSize: '20px',
                        fontWeight: 400,
                        marginTop: '40px',
                        fontFamily: selectedFont,
                      }}
                    >
                      {Object.keys(meaning)[2]}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      color: '#A445ED',
                      paddingLeft: '120px',
                      marginTop: '-30px',
                      fontSize: '20px',
                      fontWeight: 700,
                      fontFamily: selectedFont,
                    }}
                  >
                    {meaning.synonyms.join(' ')}
                  </Typography>
                </Box>
              ))}
          </Typography>

          <Divider
            orientation="horizontal"
            flexItem
            sx={{ marginTop: '40px', backgroundColor: '#3A3A3A' }}
          />

          <Typography
            sx={{
              paddingLeft: '40px',
              paddingBottom: '10px',
              fontSize: '14px',
              marginTop: '15px',
              color: '#757575',
              textDecoration: 'underline',
              fontFamily: selectedFont,
            }}
          >
            {Object.keys(wordData).find(key => key.includes('source'))}
          </Typography>

          {wordData.sourceUrls && (
            <Typography
              sx={{
                paddingLeft: '150px',
                fontSize: '14px',
                marginTop: '-30px',
                color: '#2D2D2D',
                textDecoration: 'underline',
              }}
            >
              {wordData.sourceUrls && wordData.sourceUrls.length > 0 && (
                <a
                  href={wordData.sourceUrls[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {wordData.sourceUrls[0]}
                </a>
              )}
            </Typography>
          )}
        </>
      )}
    </>
  )
}
export default Body
