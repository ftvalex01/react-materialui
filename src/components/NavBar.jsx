import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Button } from '@mui/material'



const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  menuButton:{
    marginRight:theme.spacing(2),
  },
  title:{
    flexGrow: 1
  }

}))




const NavBar = () => {

  const classes = useStyles()

    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
              <IconButton color="inherit" aria-label="menu">
                <MenuIcon className={classes.menuButton}/>
              </IconButton>
                <Typography variant="h6" className={classes.title}>
                  AlexWeb
                </Typography>
                <Button variant="text" color="inherit">
                  login
                </Button>
              </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default NavBar
