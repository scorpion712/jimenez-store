import React from "react";
import { Divider, Box, Typography, TextField, Grid } from "@mui/material";

import CartButtons from "./CartButtons";
import CartItemList from "./CartItemList"; 

const cartItems = [
  {
    code: "codigo1",
    description: "descripcion1",
    units: 2,
    price: 10.0,
  },
  {
    code: "codigo2",
    description: "descripcion2",
    units: 1,
    price: 15.0,
  },
  {
    code: "codigo3",
    description: "descripcion3",
    units: 3,
    price: 30.3,
  },
  {
    code: "codigo3",
    description: "descripcion3",
    units: 3,
    price: 30.3,
  },
  {
    code: "codigo3",
    description: "descripcion3",
    units: 3,
    price: 30.3,
  },
  {
    code: "codigo3",
    description: "descripcion3",
    units: 3,
    price: 30.3,
  },
  {
    code: "codigo3",
    description: "descripcion3",
    units: 3,
    price: 30.3,
  },
  {
    code: "codigo3",
    description: "descripcion3",
    units: 3,
    price: 30.3,
  },
  {
    code: "codigo3",
    description: "descripcion3",
    units: 3,
    price: 30.3,
  },
  {
    code: "codigo3",
    description: "descripcion3",
    units: 3,
    price: 30.3,
  },
  {
    code: "codigo3",
    description: "descripcion3",
    units: 3,
    price: 30.3,
  },
];

export default function Cart() {
  return (
    <Box>
      <Box>
        <Typography variant="h4" color="initial">
          {cartItems.length > 0
            ? `Tiene ${
                cartItems.length
              } productos en el carrito - Total: $${(
                cartItems.reduce(
                  (total, item) => total + item.price * item.units,
                  0
                )
              ).toFixed(2)}`
            : "No posee productos en el carrito"}
        </Typography>
      </Box>
      <Divider style={{ margin: ".6rem" }} />
      <Box>
        <CartItemList cartItems={cartItems} />
        {cartItems.length > 0 ? (
          <>
            <br />
            <Grid container>
              <Grid item xs={10}>
                <Typography gutterBottom variant="h6">
                  SubTotal:{"$"}
                  {(
                    cartItems.reduce(
                      (total, item) => total + item.price * item.units,
                      0
                    )
                  ).toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="cart-descuento"
                  label="% dto"
                  defaultValue={0}
                  type="number"
                  InputProps={{ inputProps: { min: 1, max: 100 } }}
                  style={{ width: "5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h5">
                  Total:{"$"}
                  {(
                    cartItems.reduce(
                      (total, item) => total + item.price * item.units,
                      0
                    )
                  ).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
            <CartButtons />
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
