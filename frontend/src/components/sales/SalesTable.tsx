import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React from "react";
import DetailsIcon from "@mui/icons-material/Details";

import useStyles from "../../styles";

interface IProduct {
  code: string;
  description: string;
  price: number;
  count: number;
}

interface ISale {
  id: string;
  date: Date;
  total: number;
  products: IProduct[];
  client?: string;
}

const sales: ISale[] = [
  {
    id: "000000001",
    date: new Date(),
    total: 250.5,
    products: [
      {
        code: "codigo1",
        description: "descripcion1",
        price: 125.25,
        count: 2,
      },
    ],
  },
  {
    id: "000000002",
    date: new Date(),
    total: 40,
    products: [
      {
        code: "codigo2",
        description: "descripcion2",
        price: 40,
        count: 1,
      },
    ],
  },
  {
    id: "000000001",
    date: new Date(),
    total: 250.5,
    products: [
      {
        code: "codigo1",
        description: "descripcion1",
        price: 125.25,
        count: 2,
      },
    ],
  },
  {
    id: "000000002",
    date: new Date(),
    total: 40,
    products: [
      {
        code: "codigo2",
        description: "descripcion2",
        price: 40,
        count: 1,
      },
    ],
  },
  {
    id: "000000001",
    date: new Date(),
    total: 250.5,
    products: [
      {
        code: "codigo1",
        description: "descripcion1",
        price: 125.25,
        count: 2,
      },
    ],
  },
  {
    id: "000000002",
    date: new Date(),
    total: 40,
    products: [
      {
        code: "codigo2",
        description: "descripcion2",
        price: 40,
        count: 1,
      },
    ],
  },
  {
    id: "000000001",
    date: new Date(),
    total: 250.5,
    products: [
      {
        code: "codigo1",
        description: "descripcion1",
        price: 125.25,
        count: 2,
      },
    ],
  },
  {
    id: "000000002",
    date: new Date(),
    total: 40,
    products: [
      {
        code: "codigo2",
        description: "descripcion2",
        price: 40,
        count: 1,
      },
    ],
  },
];

export default function SalesTable(props: {
  search: string;
  dateFrom: Date | null;
  dateTo: Date | null;
}) {
  const classes = useStyles();

  const { search, dateFrom, dateTo } = props; 
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
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.tableCellHead}>
                #
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Fecha
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Total
              </TableCell>
              <TableCell align="left" className={classes.tableCellHead}>
                Client
              </TableCell>
              <TableCell
                align="left"
                className={classes.tableCellHead}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter(
                ({ id, client}: ISale) =>
                  id.toLocaleLowerCase().includes(search) ||
                  (client ? client.toLocaleLowerCase().includes(search) : false) 
              )
              .filter(({date}:ISale) => (dateFrom ? new Date(dateFrom).toLocaleDateString('es-ES') <= new Date(date).toLocaleDateString('es-ES') : true)
              && (dateTo ? new Date(date).toLocaleDateString('es-ES') <= new Date(dateTo).toLocaleDateString('es-ES') : true)
              )
              .map((sale: ISale) => (
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    {sale.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {new Date(sale.date).toLocaleDateString("es-ES")}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {sale.total}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {sale.client ? sale.client : "-"}
                  </TableCell>
                  <TableCell style={{ width: "5%" }}>
                    <IconButton>
                      <DetailsIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 75, 100]}
        component="div"
        count={sales.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Ventas por página"
        className={classes.tablePagination}
      />
    </>
  );
}
