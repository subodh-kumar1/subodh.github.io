import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CustomAppBar = () => {
    return (
        <AppBar
            position="static"
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <a href="https://github.com/subodh-kumar1/subodh.github.io">Code Here</a>
                </Typography>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
export default CustomAppBar;