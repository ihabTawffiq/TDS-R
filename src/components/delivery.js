import React from 'react';
import {db} from '../services/firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../style/base.css';

class Delivery extends React.Component{
 
    state ={
      name:null,
      mobile:null,
      delivery : null
    };

    handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value,
        [e.target.mobile]:e.target.value,
        [e.target.delivery]:e.target.value
      })

  };
 
    componentDidMount(){
        
        db.collection('delivery')
        .get()
        .then( snapshot =>{
          const delivery =[];
          snapshot.forEach(doc=>{
            const data =doc.data();
            delivery.push(data);
          });
          this.setState({delivery : delivery});
          console.log(snapshot);
        })
        .catch(error => console.log(error));
    };
    
    addDB=(e)=>{
      const form = document.querySelector('#add2');
      e.preventDefault();
      db.collection('delivery')
      .add({
          name   :form.name.value,
          mobile :form.mobile.value
      })
      form.name.value='';
      form.mobile.value='';
    };
  

    render(){
  
    return(
  

            <div className="App">

                <h1>Edafet Mandob</h1>
          
  
  
                <form id="add2" >
                  {/* <input type ="text" name="name"  placeholder="name" onChange={this.handleChange.bind(this)}>
                  </input> */}
                  <TextField  id="outlined-basic" label="El Esm" variant="outlined" name="name"   onChange={this.handleChange.bind(this)}/>
                  <br/>
                  {/* <input type ="text" name="mobile" placeholder="mobile" onChange={this.handleChange.bind(this)}>
                  </input> */}
                   <br/>
                  <TextField id="outlined-basic" label="El Mobile" variant="outlined" name="mobile"   onChange={this.handleChange.bind(this)}/>
                  <br/>
                  <br/>
                  <Button variant="contained" color="primary" onClick={this.addDB.bind(this)}>
                     Def
                  </Button>

                  <br/>
                  <br/>
                  </form>
            </div>
        )
    }
  }
  

  export default Delivery;