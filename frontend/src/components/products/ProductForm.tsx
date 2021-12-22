import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Grid } from "@mui/material";

import useStyles from "../../styles";
import { validatePrice } from "../../helpers/utils";

interface INewProduct {
  description: string;
  price: Number;
  units: Number;
}

const categories = [
  {
    label: "CAO - FERRUM",
    value: "1",
  },
  {
    label: "CAO - FV",
    value: "2",
  },
  {
    label: "CAO - AQUASYSTEM",
    value: "3",
  },
  {
    label: "CAO - SIGAS",
    value: "4",
  },
];

export default function ProductForm(props: {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("");
  const [newProduct, setNewProduct] = React.useState({
    description: "",
    price: 0,
    units: 1,
  });

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewProduct({ ...newProduct, description: event.target.value });
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // maybe should be easy to accept , or . too (now you have to move left)
    if (validatePrice(event.target.value) || event.target.value === "") {
      setNewProduct({
        ...newProduct,
        price: Number(
          parseFloat(event.target.value ? event.target.value : "0").toFixed(2)
        ),
      });
    }
  };

  const handleUnitsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({
      ...newProduct,
      units: Number(parseInt(event.target.value)),
    });
  };

  const handleAddToCart = (product: INewProduct) => {
    if (newProduct.description) {
      console.log("Agregar al carrito", product);
    } else {
      console.log("mostrar error");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Grid item xs={12}>
          <TextField
            id="outlined-select-currency"
            select
            label="Proveedor-Categoria"
            value={currency}
            onChange={handleChangeCategory}
            helperText="Por favor, seleccione el proveedor o categoria"
            className={classes.textProdForm}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ ml: 1, flex: 1 }}
            placeholder="Artículo buscado"
            inputProps={{ "aria-label": "articulo buscado" }}
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
      </Grid>
      <Grid item xs={6} className={classes.newProductForm}>
        <Grid item xs={12}>
          <TextField
            id="new-product-description"
            label="Ingrese un producto no registrado"
            onChange={handleDescriptionChange}
            value={newProduct.description}
            className={classes.textProdForm}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="new-product-price"
            label="$UD"
            onChange={handlePriceChange}
            value={newProduct.price}
            className={classes.priceProdForm}
          />
          <TextField
            id="new-product-units"
            label="Unidades"
            type="number"
            InputProps={{ inputProps: { min: 1 } }}
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue="1"
            onChange={handleUnitsChange}
            className={classes.unitProdForm}
          />
          <IconButton
            title="Agregar unidades"
            aria-label="add-units"
            style={{ color: "#900C3F", margin: ".7rem", padding: ".7rem" }}
            size="medium"
            onClick={() => handleAddToCart(newProduct)}
          >
            <AddShoppingCartIcon color="success" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
    // <div>
    //   <TextField
    //     id="outlined-select-currency"
    //     select
    //     label="Proveedor-Categoria"
    //     value={currency}
    //     onChange={handleChangeCategory}
    //     helperText="Por favor, seleccione el proveedor o categoria"
    //     className={classes.textProdForm}
    //   >
    //     {categories.map((option) => (
    //       <MenuItem key={option.value} value={option.value}>
    //         {option.label}
    //       </MenuItem>
    //     ))}
    //   </TextField>
    //   <TextField
    //     sx={{ ml: 1, flex: 1 }}
    //     placeholder="Artículo buscado"
    //     inputProps={{ "aria-label": "articulo buscado" }}
    //     className={classes.textProdForm}
    //     onChange={props.handleSearch}
    //   />
    //   <IconButton
    //     type="submit"
    //     sx={{
    //       p: "10px",
    //       marginTop: ".7rem",
    //       paddingLeft: "0",
    //       marginLeft: "0",
    //       color: "#00838f",
    //     }}
    //     aria-label="search"
    //   >
    //     <SearchIcon />
    //   </IconButton>
    //   <br />
    //   <TextField
    //     id="new-product-desc"
    //     label="Ingrese un producto no registrado"
    //     onChange={handleDescriptionChange}
    //     value={newProduct.description}
    //     className={classes.textProdForm}
    //   />
    //   <TextField
    //     id="new-product-price"
    //     label="$UD"
    //     onChange={handlePriceChange}
    //     value={newProduct.price}
    //     className={classes.numProdForm}
    //   />
    //   <TextField
    //     id="new-product-units"
    //     label="Unidades"
    //     type="number"
    //     InputProps={{ inputProps: { min: 1 } }}
    //     InputLabelProps={{
    //       shrink: true,
    //     }}
    //     defaultValue="1"
    //     onChange={handleUnitsChange}
    //     className={classes.numProdForm}
    //   />
    //   <IconButton
    //     title="Agregar unidades"
    //     aria-label="add-units"
    //     style={{ color: "#900C3F", margin: ".7rem", padding: ".7rem" }}
    //     size="medium"
    //     onClick={() => handleAddToCart(newProduct)}
    //   >
    //     <AddShoppingCartIcon color="success" />
    //   </IconButton>
    // </div>
  );
}
