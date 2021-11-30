import React from 'react'
import Button from '@mui/material/Button'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
    buttonstyle:{
        background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
        borderRadius: 3,
        fontSize: 16,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)'
    }
})

const Estilos = () => {

    const classes = useStyle()


    return (
        <div>
            <Button className={classes.buttonstyle}>
              mi boton personalizado
            </Button>
        </div>
    )
}

export default Estilos
