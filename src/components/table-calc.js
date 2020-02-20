import React, { useEffect, useState, useRef } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from "moment";
import { db } from '../services/firebase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardCalc from './cards';




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

export default function TableC(props) {

    const Idees = props.IDDS;
    const rows = props.orders;
    const client = props.client

    // const rows = props.orders.filter(row=>{
    //     return rows.state == 0
    // })
    const classes = useStyles();
    const [total, setTotal] = useState(0)
    const [orders, setOrders] = useState([])







    useEffect(() => {
        let tot = 0
        rows.forEach(ro => { tot += +(ro.price) })

        db.collection("clients").where("name", "==", client)
            .get().then(function (querySnapshot) {

                querySnapshot.forEach(function (doc) {
                    const totalCalc = doc.data().totalCalc || []
                    setOrders(totalCalc)
                });
            });
        setTotal(tot);
        console.log(tot)
    }, [client, rows])





    function finishCalc() {

        let total1 = total
        rows.forEach(row => {

            // da 47n 3la el rasel w bgm3 el price m3 shipping
            if (row.state === 1) {
                total1 -= (+(row.price) + +(row.shipping))

                // da la8i w bgm3 s3r el 47n
            } else if (row.state === 2) {
                total1 -= +(row.price)


                // Done
            } else if (row.state === 3) {
                total1 -= 0

            }
            // tm daf3 el sha7n
            else if (row.state === 4) {
                total1 -= +(row.price)

            }

            setTotal(total1);
            console.log(total)
        })



        db.collection("clients").where("name", "==", client)
            .get().then(function (querySnapshot) {

                querySnapshot.forEach(function (doc) {
                    const totalCalc = doc.data().totalCalc || []
                    let i = 0;

                    totalCalc.forEach(bob => {
                        console.log(moment(bob.day.toDate()).format('l'), moment(new Date()).format('l'))
                        if (moment(bob.day.toDate()).format('l') === moment(new Date()).format('l')) {
                            bob.total += total
                            console.log('Matgm3 b2a yasta')
                        } else {
                            i++;
                        }
                    })
                    console.log(i, totalCalc.length)
                    if (i === totalCalc.length) {

                        totalCalc.push({
                            day: new Date(),
                            total: total
                        })

                    }

                    db.collection('clients').doc(doc.id).update({ totalCalc: totalCalc })

                    setOrders(totalCalc)

                });

            });

    }


    return (

        <TableContainer component={Paper}>
            <h1 align="center" > {total} :حساب العميل اليومي </h1>
            <CardCalc data={orders} client={client} />
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="right">El 3amel</StyledTableCell>
                        <StyledTableCell align="right">El youm</StyledTableCell>
                        <StyledTableCell align="right">El se3r</StyledTableCell>
                        <StyledTableCell align="right">El sha7n</StyledTableCell>
                        <StyledTableCell align="right">Far2 sha7n</StyledTableCell>
                        <StyledTableCell align="right">state </StyledTableCell>




                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (


                        <StyledTableRow key={[row.order_id]}>
                            <StyledTableCell component="th" scope="row">
                                {row.order_id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.client}</StyledTableCell>
                            <StyledTableCell align="right">{moment(row.date.toDate()).format('llll')}</StyledTableCell>
                            <StyledTableCell align="right">{Number(row.price)}</StyledTableCell>
                            <StyledTableCell align="right">{row.shipping}</StyledTableCell>
                            <StyledTableCell align="right">{row.far2Sha7n || "0"}</StyledTableCell>
                            <StyledTableCell align="right">{row.state}</StyledTableCell>

                        </StyledTableRow>

                    ))}

                </TableBody>
            </Table>

            <Button variant="contained" color="primary" component="span"
                onClick={finishCalc}>
                Finish
             </Button>

            <TextField InputProps={{ readOnly: true, }} id="outlined-basic" variant="outlined" value={total} />
        </TableContainer   >


    );
}
