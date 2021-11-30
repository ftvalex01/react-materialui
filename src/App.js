import React from "react";
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack';
import Delete from "@mui/icons-material/Delete";
import { Icon } from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

function App() {
  return (
    <div className="App">
     <Stack spacing={2} direction="row">
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
    </div>
  );
}

export default App;
