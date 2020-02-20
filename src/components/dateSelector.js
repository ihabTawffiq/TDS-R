import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import moment from "moment";
import Table from "./table";
import  TableC from './table-calc'

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers(props) {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(date)
        
    };
    //console.log(moment(selectedDate).format('dddd'))
    const orders = props.orders.filter(order => {
        return moment(order.date.toDate()).format('dddd') === moment(selectedDate).format("dddd");
    });
    //  console.log(orders)
    return (
        
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">

                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <Table orders={orders} />



            </Grid>
        </MuiPickersUtilsProvider>
    );
}
