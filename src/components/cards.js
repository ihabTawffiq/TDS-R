import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Modal from './modalCalc'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});








export default function SimpleCard(props) {
  const classes = useStyles();
  const total =props.data
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
        {total.map(order => (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                         {moment(order.day.toDate()).format("Do MMM YY")}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        el 7isab el kolly  
                    ({order.total})
                    </Typography>

                </CardContent>
                    <Modal  day={order.day} client={props.client} />
                <CardActions>
         </CardActions>
            </Card>
        ))}

    </div>
);
}