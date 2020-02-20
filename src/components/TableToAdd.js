import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from "moment";
import Button from '@material-ui/core/Button';
import { db } from '../services/firebase';
const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
function addToDelivery(delivry, orders) {

    db.collection('deliveryOrders')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                const data = doc.data();
                orders.push(data);
            });
        })
        .catch(error => console.log(error));
    console.log(delivry, orders)

}

export default function CustomizedTables(props) {
    const rows = props.orders
    const delivery = props.delevery
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="right">Client</StyledTableCell>
                        <StyledTableCell align="right">Day</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Shipping</StyledTableCell>
                        <StyledTableCell align="right">Adress</StyledTableCell>
                        <StyledTableCell align="right">Mobile</StyledTableCell>
                        <StyledTableCell align="right">Add To dlivery</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={[row.order_id]}>
                            <StyledTableCell component="th" scope="row">
                                {row.order_id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.client}</StyledTableCell>
                            <StyledTableCell align="right">{moment(row.date.toDate()).format('dddd')}</StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">{row.shipping}</StyledTableCell>
                            <StyledTableCell align="right">{row.adress}</StyledTableCell>
                            <StyledTableCell align="right">{row.mobile}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Button variant="contained" color="secondary" onClick={addToDelivery(delivery, rows)} >
                                    Add
                          </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
