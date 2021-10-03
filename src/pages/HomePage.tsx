import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HomePage = () => {
    return <React.Fragment>
        <AppBar>
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
                    TV Shows
                </Typography>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Button color="primary" variant="contained">My Button</Button>
        <Button color="secondary" variant="outlined">My Button</Button>
    </React.Fragment>
}
export default HomePage;