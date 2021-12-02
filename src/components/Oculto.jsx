import React from 'react'
import { withWidth } from '@material-ui/core'
import { Typography } from '@mui/material'
import { Hidden } from '@mui/material'
import { Button } from '@mui/material'

const Oculto = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho:{props.width}
            </Typography>
            <Hidden smDown>
                <Button variant="contained" color="primary">
                    me oculto pordebajo de SM
                </Button>
            </Hidden>
            <Hidden mdUp>
                <Button variant="outlined" color="primary">
                    aparesco por debajo de MD
                </Button>
            </Hidden>
            <Hidden only="lg">
                <Button variant="outlined" color="primary">
                    Me oculto en LG
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(Oculto)
