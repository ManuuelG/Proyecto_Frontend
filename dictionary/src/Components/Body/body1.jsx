import { Typography, Box, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard";

function Body1() {
  const [soundUrl, setSoundUrl] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then(({ data }) => setSoundUrl(data[0]));
  }, []);

  //

  const handleSound = (event) => {
    console.log("HOLA");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h2"
          style={{ paddingLeft: "40px", marginTop: "20px" }}
          fontWeight="bold"
        >
          Finstro diodenarl
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <IconButton onClick={handleSound} color="primary">
          <PlayCircleIcon
            fontSize="large"
            sx={{ fontSize: "4em", marginTop: "-85px", paddingRight: "60px" }}
          />
        </IconButton>
      </Box>
      <Typography
        variant="h6"
        color="purple"
        style={{ paddingLeft: "40px", marginTop: "5px" }}
        fontStyle="italic"
      >
        Gromenauer
      </Typography>
      <Typography
        variant="h5"
        style={{ paddingLeft: "40px", marginTop: "40px" }}
        fontStyle="italic"
        fontWeight="bold"
      >
        Un lago negro, un lago blanco
      </Typography>
      <Typography
        variant="h6"
        style={{ paddingLeft: "40px", marginTop: "40px" }}
        color="grey"
      >
        Meaning, no puedorrr, no puedorrr
      </Typography>
      <Typography
        style={{ paddingLeft: "100px", marginTop: "40px" }}
        variant="body1"
        component="ul"
      >
        <li>Siete caballos</li>
        <li>vienen de </li>
        <li>Bonanza</li>
      </Typography>
    </>
  );
}

export default Body1;
