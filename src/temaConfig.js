import { createTheme } from "@mui/material";
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const theme = createTheme({
    palette: {
        primary:{
            main:purple[300]
        },
        secondary:{
            main:red[700]
        }
    }
})

export default theme