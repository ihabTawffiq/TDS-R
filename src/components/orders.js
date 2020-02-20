import React from 'react';
import { db } from '../services/firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from "./table";
import moment from"moment";
import '../style/base.css'







class Order extends React.Component {


  state = {
    shipping: null,
    mobile: null,
    price: null,
    order: [],
    adress: null,
    order_id: 0,
    dayOrders: [],
    day: new Date(),
    clients: [],
    client: "E5tar el 3amel",
    btnState: false,
    dof3at: {}

  };




  componentDidMount() {
    db.collection('clients')
      .get()
      .then(snapshot => {
        const clients = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          clients.push(data);
        });
        this.setState({ clients: clients });
        console.log(this.state.clients);
      })
      .catch(error => console.log(error));

    db.collection('orders')
      .get()
      .then(snapshot => {
        const orders = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          orders.push(data);
        });
        const order_id = orders.length
        orders.sort((a, b) => {
          if (a.order_id > b.order_id) {
            return -1
          } else
            return 1
        })
        this.setState({
          order: orders,
          order_id: Number(order_id)
        });
      })
      .catch(error => console.log(error));
  };


  addOrder = (e) => {

    const form = document.querySelector('#add3');
    if (form.adress.value !== "" && form.price.value !== ""
      && form.shipping.value !== "" && this.state.client !== ""
      && this.state.client !== "E5tar el 3amel") {

      let numberOfCurrentOrders = Number(this.state.numberOfCurrentOrders)
      numberOfCurrentOrders++
      e.preventDefault();
      db.collection('orders')
        .add({
          delivery: null,
          client: this.state.client,
          adress: form.adress.value,
          mobile: form.mobile.value,
          price: form.price.value,
          shipping: form.shipping.value,
          far2Sha7n: form.far2Sha7n.value,
          date: new Date(),
          order_id: Number(this.state.order_id) + 1,
          clientName: form.clientName.value,
          state: -1
        })

      db.collection('orders')
        .get()
        .then(snapshot => {
          const orders = [];
          const ides = [];
          snapshot.forEach(doc => {
            const data = doc.data();
            const datt = doc.id;
            orders.push(data);
            ides.push(datt);
          });
          orders.sort((a, b) => {
            if (a.order_id > b.order_id) {
              return -1
            } else
              return 1
          })
          this.setState({
            order: orders,
            ides: ides,

          });
        })
        .catch(error => console.log(error));
      this.setState({
        order_id: Number(this.state.order_id) + 1,
        numberOfCurrentOrders: numberOfCurrentOrders,
      })
    } else { console.log("matnsash t3ml style llinputs") }

    //console.log(moment(order.date.toDate()).format('dddd'))

  };

  handelSelectClient = (e) => {
    this.setState({ client: e.target.value })
    this.setState({ btnState: false })
  }
  addDof3a = (e) => {
    const form = document.querySelector('#add2');
    const x = form.dof3a.value
    db.collection("clients").where("name", "==", this.state.client)
      .get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const dof3at = doc.data().dof3at
          dof3at.push({
            day: new Date(),
            flos: x
          })

          db.collection('clients').doc(doc.id).update({ dof3at: dof3at })
        });


      });
    this.setState({
      btnState: true,
      dof3at: { client: this.state.client, flos: x }
    })
  }
  render() {

    return (
      <div className="FormField">

        <select name='client' value={this.state.client} onChange={this.handelSelectClient} required >
          <option value="">{this.state.client}</option>
          {this.state.clients.map(cl => <option value={cl.name}>{cl.name}</option>)}
        </select>
        <form id="add2" onSubmit={this.addDof3a}>
          <TextField
            id="outlined-number"
            label="Dof3a"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            name="dof3a"
          />
          <Button variant="contained" color="primary" onClick={this.addDof3a} disabled={this.state.btnState}>
            Edafa
          </Button>
        </form>


        <form id="add3" onSubmit={this.addOrder} key={Math.random()}>
          <TextField InputProps={{ readOnly: true, }} id="outlined-basic" variant="outlined" label="ID" name="order_id" value={this.state.order_id} required />
          <TextField id="outlined-basic3" label="El se3r" type="number" variant="outlined" InputLabelProps={{ shrink: true, }} name="price" required />
          <TextField id="outlined-number" label="EL sha7n" type="number" variant="outlined" InputLabelProps={{ shrink: true, }} name="shipping" required />
          <TextField id="outlined-basic2" label="Far2 el sha7n" type="number" variant="outlined" InputLabelProps={{ shrink: true, }} name="far2Sha7n" required />
          <TextField id="outlined-basic2" label="El Mobile" type="number" variant="outlined" InputLabelProps={{ shrink: true, }} name="mobile" required />
          <TextField id="outlined-basic4" label="El 3enwan" variant="outlined" name="adress" required />
          <TextField id="outlined-basic4" label="Esm El 3amel" variant="outlined" name="clientName" required />
          <Button variant="contained" color="secondary" onClick={this.addOrder}>
            Add
          </Button>
          <Table orders={this.state.order} dof3at={this.state.dof3at} /> 
        </form>




      </div >
    )

  }
}



export default Order;
