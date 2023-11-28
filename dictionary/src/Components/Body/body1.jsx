import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

function Body1() {
  return (
    <>
      <Typography
        variant="h2"
        style={{ paddingLeft: "40px", marginTop: "20px" }}
        fontWeight="bold"
      >
        Finstro diodenarl
      </Typography>

      <Box alignItems="row">
        <PlayCircleIcon color="primary" fontSize="large" />
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
