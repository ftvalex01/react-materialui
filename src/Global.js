import React from 'react'
import Button from '@mui/material/Button'

import { ThemeProvider } from '@mui/material'
import theme from "./temaConfig";

const Global = () => {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              boton
            </Button>
            <Button variant="contained" color="secondary">
              boton
            </Button>
        </ThemeProvider>
    )
}

export default Global
