import React from "react";
import {  CssBaseline } from "@mui/material";
import Grid from '@mui/material/Grid';

import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Product from "../components/products/Product";
import Cart from "../components/cart/Cart";

export default function HomeView() {
    
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
      setOpen(true); 
    };
  
    const handleDrawerClose = () => {
      setOpen(false);   
    };

    return (
        <Grid container spacing={1}> 
            <Grid item xs={12}>
                <CssBaseline />
                <Header open={open} />
            </Grid> 
            <SideBar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} /> 
            <Grid item xs={12} md={7} style={{ marginTop: "4rem", marginLeft: '1rem'}}>
                <Product />
            </Grid>
            <Grid item xs={3} style={{ marginTop: "4rem", marginLeft: '1rem'}}>
                <Cart />
            </Grid>
        </Grid>
        /*
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header open={open} />
            <SideBar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
            <Product></Product>
            <Cart></Cart>
        </Box>
        */
  );
}
