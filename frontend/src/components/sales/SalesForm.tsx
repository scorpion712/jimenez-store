import { Grid, IconButton, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search"; 

import useStyles from "../../styles";

export default function SalesForm(props: {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateFrom: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateTo: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const classes = useStyles();


  return (
    <Grid container>
      <Grid item xs={3} style={{ marginTop: "5rem", marginLeft: "16rem" }}>
        <TextField
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar venta"
          inputProps={{ "aria-label": "venta buscada" }}
          className={classes.textProdForm}
          onChange={props.handleSearch}
        />
        <IconButton
          type="submit"
          sx={{
            p: "10px",
            marginTop: ".7rem",
            paddingLeft: "0",
            marginLeft: "0",
            color: "#00838f",
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item xs={3} style={{ marginTop: "5rem" }}>
        <TextField
            style={{ marginRight: "1rem" }}
          id="from-date"
          label="Fecha Desde"
          type="date"
          defaultValue={null}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={props.handleDateFrom}
        />
        <TextField
          id="to-date"
          label="Fecha Hasta"
          type="date"
          defaultValue={null}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={props.handleDateTo}
        />
        <Grid container></Grid>
      </Grid>
    </Grid>
  );
}
