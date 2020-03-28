import React, { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { isLoggedIn } from '../Utils/UserAuthentication';
import { useHistory } from "react-router-dom";
import AppPaths from "../AppPaths";
import AppConstants from "../AppConstants";

const useStyles = makeStyles(theme => ({
    menuText: {
      fontSize: 13,
    },  
  }));

const AccountButton = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorE1] = useState(null)
    const history = useHistory();

    const handleMenu = event => {
        setAnchorE1(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorE1(null)
    };

    const handleSignOutMenuItem = () => {
        localStorage.removeItem(AppConstants.JWT_KEY);
        history.push(AppPaths.SIGN_IN);
    }

    const handleSignInMenuItem = () => {
        history.push(AppPaths.SIGN_IN);
    }

    const handleProfileMenuItem = () => {
        history.push(AppPaths.PROFILE);
    }

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
                    <Typography className={classes.menuText} onClick={handleProfileMenuItem}>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>{
                    isLoggedIn() ? <Typography className={classes.menuText} onClick={handleSignOutMenuItem}>Sign Out</Typography> :
                                   <Typography className={classes.menuText} onClick={handleSignInMenuItem}>Sign In</Typography>
                }
                    
                </MenuItem>
            </Menu>
        </div>
    )
}

export default AccountButton