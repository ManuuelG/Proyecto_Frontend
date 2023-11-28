import { Typography, Divider, Box  } from "@mui/material"
import Play from "../PlayButton/play";

function Body() {
    return (
      <>

        <Box 
          sx={{
            float: "right",
            marginTop: "63px"
          }}>
            <Play/>
        </Box>

        <Box>
          <Typography
            variant="h2"
            sx={{
              paddingLeft: "40px",
              marginTop: "43px",
              fontWeight: "700",
            }}
          >
            Keyboard
          </Typography>
        </Box>

        <Typography
          sx={{
            marginLeft: "40px",
            marginTop: "8px",
            fontSize: "24px",
            color: "#A445ED",
          }}
        >
          /ˈkiːbɔːd/
        </Typography>

        <Typography
          sx={{
            paddingLeft: "40px",
            fontSize: "24px",
            fontStyle: "italic",
            fontWeight: 700,
            marginTop: "40px"
          }}
        >
          noun
        </Typography>

        <Divider orientation="horizontal" flexItem sx={{ marginLeft: "120px", marginTop: "-13px"   }} />

        <Typography
          sx={{
            paddingLeft: "40px",
            fontSize: "20px",
            marginTop: "40px",
            color: "#757575",
          }}
        >
          Meaning
        </Typography>

        <Typography
        sx={{
          paddingLeft: "60px",
          marginTop: "15px",
          fontSize: "18px",
          "& li": {
            marginBottom: "13px",
          },  
        }}
        >
          <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
          <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
          <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
        </Typography>

        <Typography
          sx={{
            color: "#757575",
            paddingLeft: "40px",
            fontSize: "20px",
            fontWeight: 400,
            marginTop: "40px"
        } }
        >
        Synonyms
        </Typography>

        <Typography
          sx={{
            color: "#A445ED",
            paddingLeft: "150px",
            marginTop: "-30px",
            fontSize: "20px",
            fontWeight: 700,
        } }
        >
        electronic keyboard
        </Typography>



{/* ----------------------------------------------------------------------------------- */}




        <Typography
          variant="body2"
          sx={{
            paddingLeft: "40px",
            fontSize: "24px",
            fontStyle: "italic",
            fontWeight: 700,
            marginTop: "40px"
          }}
        >
          verb
        </Typography>
        <Divider orientation="horizontal" flexItem sx={{ marginLeft: "120px", marginTop: "-16px"   }} />

        <Typography
          sx={{
            paddingLeft: "40px",
            fontSize: "20px",
            marginTop: "40px",
            color: "#757575",
          }}
        >
          Meaning
        </Typography>

        <Typography
        sx={{
          paddingLeft: "60px",
          marginTop: "15px",
          fontSize: "18px",
          "& li": {
            marginBottom: "13px",
          }, 
        }}
      >
        <li>To type on a computer keyboard.</li>
      </Typography>

      <Typography
          sx={{
            paddingLeft: "85px",
            marginTop: "15px",
            fontSize: "18px",
            color: "#757575",
          }}
        >
          “Keyboarding is the part of this job I hate the most.”
        </Typography>

        <Divider orientation="horizontal" flexItem sx={{ marginTop: "40px" }} />

        <Typography
          sx={{
            paddingLeft: "40px",
            fontSize: "14px",
            marginTop: "15px",
            color: "#757575",
            textDecoration: "underline",
          }}
        >
          Source
        </Typography>

        <Typography
          sx={{
            paddingLeft: "100px",
            fontSize: "14px",
            marginTop: "-21px",
            color: "#2D2D2D",
            textDecoration: "underline",
          }}
        >
          Esto tiene que ser el enlace
        </Typography>

          

      </>

      
    )
  }
  export default Body;