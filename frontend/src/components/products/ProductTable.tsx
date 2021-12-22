import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";

import ProductRow from "./ProductRow";
import useStyles from "../../styles";

interface IProduct {
  code: string;
  description: string;
  price: Number;
}

const products = [
  {
    code: "codigo1",
    description: "Descripcion1",
    price: 10.0,
  },
  {
    code: "codigo2",
    description: "Descripcion2",
    price: 15.0,
  },
  {
    code: "codigo3",
    description: "Descripcion3",
    price: 30.3,
  },
  {
    code: "codigo4",
    description: "Descripcion1",
    price: 410.36,
  },
  {
    code: "codigo6",
    description: "Descripcion6",
    price: 66.66,
  },
  {
    code: "codigo1",
    description: "Descripcion1",
    price: 10.0,
  },
  {
    code: "codigo2",
    description: "Descripcion2",
    price: 15.0,
  },
  {
    code: "codigo3",
    description: "Descripcion3",
    price: 30.3,
  },
  {
    code: "codigo4",
    description: "Descripcion1",
    price: 410.36,
  },
  {
    code: "codigo6",
    description: "Descripcion6",
    price: 66.66,
  },
  {
    code: "codigo3",
    description: "Descripcion3",
    price: 30.3,
  },
  {
    code: "codigo4",
    description: "Descripcion1",
    price: 410.36,
  },
  {
    code: "codigo6",
    description: "Descripcion6",
    price: 66.66,
  },
  {
    code: "codigo3",
    description: "Descripcion3",
    price: 30.3,
  },
  {
    code: "codigo4",
    description: "Descripcion1",
    price: 410.36,
  },
  {
    code: "codigo6",
    description: "Descripcion6",
    price: 66.66,
  },
  {
    code: "codigo3",
    description: "Descripcion3",
    price: 30.3,
  },
  {
    code: "codigo4",
    description: "Descripcion1",
    price: 410.36,
  },
  {
    code: "codigo6",
    description: "Descripcion6",
    price: 66.66,
  },
  {
    code: "codigo3",
    description: "Descripcion3",
    price: 30.3,
  },
  {
    code: "codigo4",
    description: "Descripcion1",
    price: 410.36,
  },
  {
    code: "codigo6",
    description: "Descripcion6",
    price: 66.66,
  },
];

export default function ProductTable(props: { productSearch: string }) {
  const classes = useStyles();

  const { productSearch } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.tableCellHead}>
                Código
              </TableCell>
              <TableCell align="center" className={classes.tableCellHead}>
                Descripción
              </TableCell>
              <TableCell align="center" className={classes.tableCellHead}>
                Precio
              </TableCell>
              <TableCell className={classes.tableCellHead} />
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .filter(
                ({ code, description }: IProduct) =>
                  code.toLocaleLowerCase().includes(productSearch) ||
                  description.toLocaleLowerCase().includes(productSearch)
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product: IProduct) => (
                <ProductRow product={product} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 7, 10, 15, { label: "Todos", value: -1 }]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Productos por página"
        className={classes.tablePagination}
      />
    </div>
  );
}
