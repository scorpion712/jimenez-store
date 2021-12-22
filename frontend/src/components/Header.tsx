import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, CssBaseline } from "@mui/material";

export default function Header(props: {open: boolean}) {
    return (
        <AppBar position="fixed"> 
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer" 
                        edge="start"
                        sx={{
                        marginRight: "4rem",
                        ...(props.open && { /*display: "none" */marginRight: "16rem" }),
                        }}
                    > 
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Jimenez Sanitarios
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}
