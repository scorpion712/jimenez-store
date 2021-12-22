import React from 'react'
import { 
    TableRow,
    TableCell, 
    IconButton, 
    TextField,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useStyles from '../../styles';

interface IProduct {
    code: string;
    description: string;
    price: Number;
  }

export default function ProductRow(props: {product: IProduct}) {

    const classes = useStyles();

    const { product } = props;

    const handleAddToCart = (product: IProduct) => {
        console.log('Agregar al carrito', product);
    }

    return (
        <TableRow hover>
            <TableCell component="th" scope="row" className={classes.tableCell}>{product.code}</TableCell>
            <TableCell align="center" className={classes.tableCell}>{product.description}</TableCell>
            <TableCell align="center" className={classes.tableCell}>{product.price.toFixed(2)}</TableCell>
            <TableCell align="left" className={classes.tableCell} style={{width: '10rem'}}>
                <TextField
                    id="filled-number"
                    label="Unidades"
                    type="number"
                    InputProps={{ inputProps: { min: 1 } }}
                    InputLabelProps={{
                        shrink: true,
                    }} 
                    style={{width: '5rem', textAlign: 'center'}}
                    defaultValue='1'
                />
                <IconButton title='Agregar unidades' aria-label="add-units" style={{ color: "#900C3F" }} size="medium" onClick={() => handleAddToCart(product)}>
                     <AddShoppingCartIcon style={{color: '#2e7d32'}} />
                </IconButton> 
            </TableCell> 
    </TableRow>
    )
}
