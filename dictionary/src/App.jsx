import Body from "./Components/Body/body";
import { Container, Box } from "@mui/material";
import { useState } from "react";
import Navbar from "./Components/Navbar/navbar";
import PlayCircleIcon from "./Components/PlayButton/play";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Container maxWidth="auto">

      <Box sx={{ border: "3px solid red", height: "200vh" }}>

      <Box sx={{ height: 'auto' }}>

        <Navbar onSearch={handleSearch} />
        <Body searchTerm={searchTerm} />
        <PlayCircleIcon />
      </Box>
    </Container>
  );
}

export default App;
