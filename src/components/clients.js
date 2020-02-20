import React from 'react';
import { db } from '../services/firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClientSheet from './client-sheet';



// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";



// import $ from 'jquery';
// import  { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../style/base.css';







class Client extends React.Component {



  state = {
    name: null,
    mobile: null,
    client: null,
    region: null,
    client_id: 0,
  };


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.mobile]: e.target.value,
      [e.target.client]: e.target.value,
      [e.target.region]: e.target.value,
    })

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
        const client_id = clients.length
        clients.sort((a, b) => {
          if (a.client_id > b.client_id) {
            return -1
          } else
            return 1
        })
        this.setState({
          clients: clients,
          client_id: Number(client_id)
        });
        //console.log(clients);
      })
      .catch(error => console.log(error));
  };



  addDB = (e) => {
    const form = document.querySelector('#add');
    console.log(form)
    e.preventDefault();
    db.collection('clients')
      .add({
        name: form.name.value,
        mobile: form.mobile.value,
        region: form.region.value,
        client_id: Number(this.state.client_id) + 1
      })
    form.name.value = '';
    form.mobile.value = '';
    form.region.value = '';
  };


  render() {


    return (

      <div  >




        <h1>Edafet 3amel</h1>

        <form id="add" className="client-form">
          {/* <input type ="text" name="name"  placeholder="name" onChange={this.handleChange.bind(this)}>
                  </input> */}
          <TextField id="outlined-basic" label="El esm" variant="outlined" name="name" onChange={this.handleChange.bind(this)} />

          {/* <input type ="text" name="mobile" placeholder="mobile" onChange={this.handleChange.bind(this)}>
                  </input> */}

          <TextField id="outlined-basic" label="EL mobile" variant="outlined" name="mobile" onChange={this.handleChange.bind(this)} />

          <TextField id="outlined-basic" label="El mante2a" variant="outlined" name="region" onChange={this.handleChange.bind(this)} />

          <Button id="add-btn" variant="contained" color="primary" onClick={this.addDB.bind(this)}>
            Def
                  </Button>



        </form>


        <ClientSheet />

      </div>
    )
  }
}


export default Client;



















// import React from 'react';
// import { db } from '../services/firebase';
// //import Table from "./table";
// import Button from '@material-ui/core/Button';
// import DateSelector from "./dateSelector";
// //import Cards from "./cards";
// import moment from 'moment';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';




// class FilterBy extends React.Component {


//     state = {

//         order: [],
//         clients: [],
//         client: "Choose Client",
//         filteredDates: [],


//     };



//     componentDidMount() {


//         db.collection('clients')
//             .get()
//             .then(snapshot => {
//                 const clients = [];
//                 const orders =[];
//                 snapshot.forEach(doc => {
//                     const data = doc.data();
//                     clients.push(data);

//                 });
//                 this.setState({ clients: clients });
//               // console.log(this.state.clients);
//             })
//             .catch(error => console.log(error));
          



//             db.collection('orders').where("client","==",this.state.client)
//             .get()
//             .then(snapshot => {
//                 const orders = [];
//                 snapshot.forEach(doc => {
//                     const data = doc.data();
//                     orders.push(data);
//                    console.log(data.date)
//                    console.log(moment(data.date.toDate()).format('l'))

//                 });
//                 this.setState({ orders: orders });
//               //  console.log(this.state.orders);
//             })
//             .catch(error => console.log(error));
//             const filteredDates = this.state.order.filter(order => {
//                 return (order.client === this.state.client)
//             })
//             this.setState({ filteredDates })

//             console.log(this.state.filteredDates)





//     };



//     handelFilter = () => {
//         const filteredDates = this.state.order.filter(order => {
//             console.log(order.client, this.state.client)
//             return (order.client === this.state.client)
//         })
//         this.setState({ filteredDates})
//         console.log(this.state.filteredDates)

//     }
//     handleDateChange=(e)=>{
//         const check = moment(e).format('l');
//         console.log(check)
//     }


//     handelSelectClient = (e) => {
//         this.setState({ client: e.target.value })

//     }






//     render() {
//         return (
//             <div>
//                 <form >

//                 <center>

//                     <select  id="val" value={"this.state.client"} onChange={this.handelSelectClient} required >

//                     <option onChange={this.handelSelectClient} value={this.state.client}>{this.state.client}</option>
//                         {this.state.clients.map(cl => <option value={cl.name}>{cl.name}</option>)}
//                 </select>
//                 </center>

//                 <center>
//                     <Button variant="contained" color="secondary" onClick={this.handelFilter}>
//                         Filter by Client
//                     </Button>
//                 </center>



//                 <DateSelector orders={this.state.filteredDates} />

//         </form>
//             </div >
//         )
//     }

// }
// export default FilterBy;















// class Client extends Component {
//   constructor() {
//       super();

//       this.state = {
//           email: '',
//           password: ''
//       };

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//       let target = e.target;
//       let value = target.type === 'checkbox' ? target.checked : target.value;
//       let name = target.name;

//       this.setState({
//         [name]: value
//       });
//   }

//   handleSubmit(e) {
//       e.preventDefault();

//       console.log('The form was submitted with the following data:');
//       console.log(this.state);
//   }

//   render() {
//       return (
//       <div className="FormCenter">
//           <form onSubmit={this.handleSubmit} className="FormFields">
//           <div className="FormField">
//               <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
//               <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
//             </div>

//             <div className="FormField">
//               <label className="FormField__Label" htmlFor="password">Password</label>
//               <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
//             </div>

//             <div className="FormField">
//                 <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
//             </div>
//           </form>
//         </div>
//       );
//   }
// }

// export default Client;