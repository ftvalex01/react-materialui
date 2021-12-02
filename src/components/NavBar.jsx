import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Button } from '@mui/material'



const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1

    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            paddingLeft: 240,
        },
    },
}))

const NavBar = (props) => {

    const classes = useStyles()

    return (
    
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                    onClick={() => props.accionAbrir()}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    AlexWeb
                </Typography>
                <Button variant="text" color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar


