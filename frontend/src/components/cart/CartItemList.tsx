import React from "react";
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"; 

interface ICartItem {
    code: String,
    description: String,
    price: number,
    units: number,
}


export default function CartItemList(props: {cartItems: ICartItem[]}) {
    const { cartItems } = props;

    const handleRemoveUnit = (item: ICartItem) => {
      console.log('elimino 1 de ', item.description); 
    }

    const handleAddUnit = (item: ICartItem) => {
      console.log('agrego 1 de ', item.description); 
    }

    const handleRemoveItem = (item: ICartItem) => {
      console.log('elimino ', item.description); 
    }

    return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "#F0F2F5",
        position: "relative",
        overflow: "auto", 
        height: "35rem",
        "& ul": { padding: 0 },
      }}
    >
      {cartItems.map((item) => (
        <ListItem>
          <ListItemText>
            <Typography gutterBottom variant="h6" color="initial">
              {item.units} x ${(item.price).toFixed(2)} - {item.description}
              <br /> ${(item.units * item.price).toFixed(2)}
            </Typography>
          </ListItemText>
          <ListItemIcon>
            <IconButton size="small" aria-label="remove-item" onClick={() => handleRemoveUnit(item)}>
              <RemoveCircleIcon style={{ color: "#E74C3C" }} />
            </IconButton>
            <IconButton aria-label="add-unit-item" onClick={() => handleAddUnit(item)}>
              <AddCircleIcon style={{ color: "#145A32" }} />
            </IconButton>
            <IconButton aria-label="delete-item" style={{ color: "#a60606" }} onClick={() => handleRemoveItem(item)}>
              <DeleteForeverIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}
