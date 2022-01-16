import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent'; 
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import { ISale } from '../interfaces/Sale';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import DetailTable from '../components/DetailTable';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function DialogSale(props: {
    open: boolean,
    sale: ISale | null,
    handleClose: () => void
}) { 

    const { open, sale, handleClose } = props;

    const onClose = () => {
      handleClose();
    };
  
    return (
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Detalle de venta para " + sale?.client + " - " + new Date(sale? sale.date: new Date()).toLocaleDateString('es-ES')}</DialogTitle>
        <DialogContent>
          <DetailTable sale={sale} headers={["Cantidad", "Descripcion Producto", "$Ud", "$Total"]}/>
          <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
                justifyContent: 'end'}}
            > 
                <Typography gutterBottom variant='h5' >Total: </Typography>  
                <Typography gutterBottom variant='h6'>{sale?.products.reduce((total, product)=>total+product.price,0)}</Typography>
          </Box> 
        </DialogContent>
        <DialogActions> 
          <Button onClick={() => console.log("Print Ticket")}>Imprimir Ticket</Button>
          <Button color='error' onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    )
}
