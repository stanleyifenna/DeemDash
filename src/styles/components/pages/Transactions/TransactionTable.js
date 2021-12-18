import React from 'react';
import './Transactions.css';
import './TransactionTable.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Grid,
  Paper,
  Typography,
  TablePagination,
  TableRow } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(amount, payment, reference, name, date, time) {
  return { amount, payment, reference, name, date, time };
}

const rows = [
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 7),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TransactionTable() {

  const classes = useStyles();
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className="title">
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell>Payment method</StyledTableCell>
            <StyledTableCell>Transaction reference</StyledTableCell>
            <StyledTableCell>Customer name</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <StyledTableRow key={row.amount}>
              <StyledTableCell component="th" scope="row">
                {row.amount}
              </StyledTableCell>
              <StyledTableCell className="qr-code">{row.payment}</StyledTableCell>
              <StyledTableCell >{row.reference}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.date}</StyledTableCell>
              <StyledTableCell>{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TablePagination
            rowsPerPageOptions={[10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Table>
    </TableContainer>
  );
}