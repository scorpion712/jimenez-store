import React from 'react'
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import { ISale } from '../interfaces/Sale';
import { IProduct } from '../interfaces/Product';
import useStyles from '../styles';
 

export default function DetailTable(props: {
    sale: ISale | null,
    headers: string []
}) {

    const classes = useStyles();

    return (
        <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          {props.headers.map(th => (
                              <TableCell align="left" className={classes.tableCellHead}>{th}</TableCell>
                          ))}
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {
                          props.sale?.products.map((product: IProduct) => (
                            <TableRow>
                                <TableCell>{product.count}</TableCell> 
                                <TableCell>{product.description}</TableCell> 
                                <TableCell>{product.price}</TableCell> 
                                <TableCell>{product.count * product.price}</TableCell> 
                            </TableRow>
                          ))
                      }
                  </TableBody>
              </Table>
          </TableContainer>
    )
}
