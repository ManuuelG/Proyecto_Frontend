import { Container, Typography  } from "@mui/material";



function Body2() {
    return (
      <Container>
           <Typography
        variant="body2"
        sx={{
          color: "#757575",
          marginLeft: "0px",
          fontSize: "20px",
          fontWeight: 400,
        }}
      >
        Synonyms  electronic keyboard
     </Typography>

     <Typography
        variant="body2"
        sx={{
          marginLeft: "0px",
          fontSize: "24px",
          fontStyle: "italic",
          fontWeight: 700,
        }}
      >
        verb
      </Typography>

      </Container>
    );
  }
  export default Body2;