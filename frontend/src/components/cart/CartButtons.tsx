import React from 'react'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import useStyles from '../../styles';

export default function CartButtons() {
    const classes = useStyles();

    return (
        <Grid container style={{ margin: "1rem" }}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className={classes.cartButton} 
                sx={{ 
                  bgcolor: "#01579b", 
                }}
              >
                Vender
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                className={classes.cartButton} 
              >
                Presupuesto
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className={classes.cartButton} 
                sx={{
                  bgcolor: "#0091ea" 
                }}
              >
                A Cuenta
              </Button>
            </Grid>
          </Grid>
    )
}
