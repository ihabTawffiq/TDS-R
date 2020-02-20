import React from 'react';
import {db} from '../services/firebase';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";



// import $ from 'jquery';
// import  { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../style/base.css';







class SelectC extends React.Component{



    state ={
      name:null,
      mobile:null,
      client:null
    };

  
    handleChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value,
          [e.target.mobile]:e.target.value,
          [e.target.client]:e.target.value
        })

    };
   
    componentDidMount(){
        
        db.collection('clients')
        .get()
        .then( snapshot =>{
          const clients =[];
          snapshot.forEach(doc=>{
            const data =doc.data();
            clients.push(data);
          });
          this.setState({clients : clients});
          // console.log(snapshot);
        })
        .catch(error => console.log(error));
    };
    

  
  
    
    render(){

     
        return(

          <div>



      
                
                  <FormControl id="form-control">
                    <InputLabel id="demo-simple-select-label">Client</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={this.handleChange}
                    >
                    { this.state.clients && this.state.clients.map( client =>{
                            return(
                          <MenuItem value={client.name}>{client.name}</MenuItem>
                                )
                     })
                    } 
                      
                    </Select>
               </FormControl>
                 
                  <br/>
                  <br/>

                
                
               
  
            </div>
        )
    }
  }
  

  export default SelectC;



































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