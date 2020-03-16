import React, { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    menuText: {
      fontSize: 13,
    },  
  }));

const AccountButton = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorE1] = useState(null)

    const handleMenu = event => {
        setAnchorE1(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorE1(null)
    };

    return (
        <div>
            <IconButton
                aria-owns={anchorEl ? 'menu-account' : undefined}
                aria-haspopup='false'
                onClick={handleMenu}
                color='inherit'>
                <AccountCircle />
            </IconButton>

            <Menu
                id='menu-account'
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={anchorEl}
                onClose={handleClose}>

                <MenuItem onClick={handleClose}>
                    <Typography className={classes.menuText}>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography className={classes.menuText}>Logout</Typography>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default AccountButton