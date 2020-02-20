import React ,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Table from './table';
import { db } from '../services/firebase';
import moment from "moment";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));




export default function SimpleModal(props) {
    const day = props.day
    const client = props.client
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const [orders,setOrders]=useState([])


 useEffect(()=>{    
    const ordersss = [];
    db.collection('orders').where('client','==',client)
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
          ordersss.push(doc.data());
        });
    })
    .catch(error => console.log(error));
    const filteredOrders = ordersss.filter(order => {
      console.log("qqq")
    return (moment(order.date.toDate()).format('l')===moment(day.toDate()).format('l'))
})
    setOrders(filteredOrders)
  
 },[])



  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
       
      </Modal>
    </div>
  );
}
