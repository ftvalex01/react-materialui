import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,

} from '@mui/material'

import AccessibleIcon from '@mui/icons-material/Accessible';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

const Lista = () => {
    return (
        <div>
            <List component="nav">

                <ListItem button>
                    <ListItemIcon>
                        <AccessibleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="mi primer elemento"></ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AccessibleForwardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="mi segundo elemento"></ListItemText>
                </ListItem>

                <Divider/>
            </List>
        </div>
    )
}

export default Lista
