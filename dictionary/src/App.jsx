import React from "react";
import Body1 from "./Components/Body/body1.jsx";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ border: "3px solid red", height: "100vh" }}>
        <Body1 />
      </Box>
    </Container>
  );
}

export default App;
