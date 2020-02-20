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

export default function CustomizedTables(props) {
    const rows = props.orders
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="right">El 3amel</StyledTableCell>
                        <StyledTableCell align="right">El youm</StyledTableCell>
                        <StyledTableCell align="right">El se3r</StyledTableCell>
                        <StyledTableCell align="right">El sha7n</StyledTableCell>
                        <StyledTableCell align="right">Far2 sha7n</StyledTableCell>
                        <StyledTableCell align="right">El 3enwan</StyledTableCell>
                        <StyledTableCell align="right">El Mobile</StyledTableCell>
                        <StyledTableCell align="right">Esm el 3amel</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row=> (

                        <StyledTableRow key={[row.order_id]}>
                            <StyledTableCell component="th" scope="row">
                                {row.order_id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.client}</StyledTableCell>
                            <StyledTableCell align="right">{moment(row.date.toDate()).format('llll')}</StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">{row.shipping}</StyledTableCell>
                            <StyledTableCell align="right">{row.far2Sha7n || "0"}</StyledTableCell>
                            <StyledTableCell align="right">{row.adress}</StyledTableCell>
                            <StyledTableCell align="right">{row.mobile}</StyledTableCell>
                            <StyledTableCell align="right">{row.clientName}</StyledTableCell>

                        </StyledTableRow>

                    ))}

                </TableBody>
            </Table>
        </TableContainer >
    );
}
