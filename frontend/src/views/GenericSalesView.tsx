import { CssBaseline, Grid } from "@mui/material";
import React from "react"; 

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import SalesForm from "../components/sales/SalesForm";

export default function GenericSalesView(props:{
    children: JSX.Element,
    open: boolean,
    handleDrawerOpen: () => void,
    handleDrawerClose: () => void,
    handleDateTo: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleDateFrom: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void,
}) {

    const { open, handleDrawerOpen, handleDrawerClose, handleDateTo, handleDateFrom, handleSearch} = props;

    return (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CssBaseline />
            <Header open={open} />
          </Grid>
          <SideBar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
          <SalesForm handleSearch={handleSearch} handleDateTo={handleDateTo} handleDateFrom={handleDateFrom} />
          <Grid
            item
            xs={10}
            justifyContent="flex-start"
            style={{ marginLeft: "16rem" }}
          >
            {props.children}
          </Grid>
        </Grid>
    )
}
