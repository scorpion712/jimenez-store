import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((/*theme*/) => ({
  root: {
    backgroundColor: "#F0F2F5",
  },
  /* Table styles */
  tableCellHead: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    color: "#F0F2F5",
    backgroundColor: "#01579b",
  },
  tableCell: {
    fontSize: "1.2rem",
    color: "#000",
    //backgroundColor: '#eceff1',
  },
  tablePagination: {
    fontSize: "1rem",
    color: "#F0F2F5",
    backgroundColor: "#01579b",
  },
  /* Product Form styles */
  textProdForm: {
    width: "90%",
    padding: ".3rem",
    margin: ".3rem",
  },
  newProductForm: {
    border: "2px solid blue",
    borderRadius: "5px",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  priceProdForm: {
    width: "7rem",
    padding: ".3rem",
    margin: ".3rem",
  },
  unitProdForm: {
    width: "5rem",
    padding: ".3rem",
    margin: ".3rem",
  },
  /* Cart styles */
  cartItem: {
    fontSize: "2rem",
    fontWeight: "700",
  },
  cartButton: {
    minWidth: "120px",
    color: "#F0F2F5",
    padding: "1rem",
  },
}));

export default useStyles;
