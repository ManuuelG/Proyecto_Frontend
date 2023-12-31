import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import axios from 'axios'

const Play = ({ searchTerm, data }) => {
  const [soundUrl, setSoundUrl] = useState([])
  const [isHovered, setHover] = useState(false)

  const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(baseUrl)
        .then(response => {
          const phonetics = response.data?.phonetics
          if (phonetics && phonetics.length > 0) {
            const audioUrl = phonetics[0]?.audio
            if (audioUrl) {
              setSoundUrl(audioUrl)
            }
          }
        })
        .catch(error => {
          console.error('Error fetching word data', error)
        })
    }
  }, [searchTerm])

  const handleSound = event => {
    const phonetics = data.phonetics
    const audioUrl = phonetics && phonetics[0]?.audio

    if (audioUrl) {
      const audio = new Audio(audioUrl)
      audio.play()
    } else if (phonetics) {
      const alternativeAudio = phonetics.find(audio => audio.audio)?.audio

      if (alternativeAudio) {
        const audio = new Audio(alternativeAudio)
        audio.play()
      }
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingRight: '20px',
      }}
    >
      <button
        type="button"
        onClick={handleSound}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        {isHovered ? (
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="37.5" cy="37.5" r="37.5" fill="#A445ED" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29 27V48L50 37.5L29 27Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.25"
              cx="37.5"
              cy="37.5"
              r="37.5"
              fill="#A445ED"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29 27V48L50 37.5L29 27Z"
              fill="#A445ED"
            />
          </svg>
        )}
      </button>
    </Box>
  )
}

export default Play
