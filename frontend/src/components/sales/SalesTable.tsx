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
import DialogSale from "../../dialogs/DialogSale";
import { ISale } from "../../interfaces/Sale";


const sales: ISale[] = [
  {
    id: "000000001",
    date: new Date(), 
    products: [
      {
        code: "codigo1",
        description: "descripcion1",
        price: 125.25,
        count: 2,
      },
      {
        code: "codigo43",
        description: "descripcion43",
        price: 125.25,
        count: 2,
      },
      {
        code: "codigo45",
        description: "descripcion45",
        price: 125.25,
        count: 2,
      },
    ],
  },
  {
    id: "000000002",
    date: new Date(),
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


  const headers : string [] = [
    "#", "Fecha", "Total", "Cliente", ""
  ]; 


  const classes = useStyles();

  const { search, dateFrom, dateTo } = props; 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openDetail, setOpenDetail ] = React.useState(false);
  const [selectedSale, setSelectedSale ] = React.useState<ISale | null>(null);

  const handleClose = () => {
    setOpenDetail(false);
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onDetailClick = (sale: ISale) => {
    setSelectedSale(sale);
    setOpenDetail(true);
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {
                headers.map(th => (
                  <TableCell align="left" className={classes.tableCellHead}>
                    {th}
                  </TableCell>
                ))
              }
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
                    {sale.products.reduce(((total, product)=> total+product.price), 0)}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {sale.client ? sale.client : "-"}
                  </TableCell>
                  <TableCell style={{ width: "5%" }}>
                    <IconButton onClick={() => onDetailClick(sale)}>
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
      <DialogSale open={openDetail} handleClose={handleClose} sale={selectedSale}/>
    </>
  );
}
