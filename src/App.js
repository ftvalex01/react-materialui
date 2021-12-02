/* eslint-disable no-lone-blocks */
import React from "react";
import { ThemeProvider} from '@mui/material'
import theme from "./temaConfig";
import Contenedor from "./components/Contenedor";



function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>

      <Contenedor/>

    </ThemeProvider>
    </div>
  );
}

export default App;





 {/* <NavBar/>
            <Button variant="contained" color="primary">
              boton
            </Button>
            <Button variant="contained" color="secondary">
              boton
            </Button>
            <Lista></Lista>
            <Oculto></Oculto> */}


/* import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack';
import Delete from "@mui/icons-material/Delete";
import { Icon } from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Estilos from "./Estilos";
import Global from "./Global";  */

/* import Lista from "./components/Lista";
import Button from '@mui/material/Button'
import NavBar from "./components/NavBar";
import Oculto from "./components/Oculto"; */




 {/*   <Stack spacing={2} direction="row">
      <Button variant="contained" color="success"  >
      Hello World
      </Button>
      <Button variant="outlined" size="small" >
      Hello World
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
      Send
      </Button>
      <Button variant="contained" fullWidth>
      Soy el full
      </Button>
      </Stack>
      <Stack spacing={2}>
       <Delete>
         hola
       </Delete>
       <Icon>
       login
       </Icon>
       <AccessAlarmIcon></AccessAlarmIcon>
       </Stack>
       <Stack spacing={2}>
       <Typography variant ="h3" align="right" color="primary">
        Hola soy el texto del typhograpy
       </Typography>
       <Typography paragraph>
        hola soy el texto del typhograpy2
       </Typography>
       <Typography gutterBottom>
        hola soy el texto del typhograpy2
       </Typography>
       </Stack>

       <br/>
       <Estilos></Estilos>
       <br/>
       <Global></Global> */}