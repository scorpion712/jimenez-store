import { CssBaseline, Grid } from "@mui/material";
import React from "react"; 

import Header from "../components/Header";
import SalesTable from "../components/sales/SalesTable";
import SideBar from "../components/SideBar";
import SalesForm from "../components/sales/SalesForm";

export default function SalesView() { 

  const [open, setOpen] = React.useState(true);
  const [search, setSearch] = React.useState('');
  const [dateFrom, setDateFrom] = React.useState<Date | null>(null);
  const [dateTo, setDateTo] = React.useState<Date | null>(null);
  
  const handleDateFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateFrom(new Date(event.target.value));
  };
  
  const handleDateTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateTo(new Date(event.target.value));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLocaleLowerCase());
  }

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
        <SalesTable search={search} dateFrom={dateFrom} dateTo={dateTo} />
      </Grid>
    </Grid>
  );
}
