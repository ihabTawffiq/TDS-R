import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {db} from '../services/firebase';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import swal from 'sweetalert';



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





class ClientSheet extends React.Component{



   
        state ={
            name:null,
            mobile:null,
            client:null,
            region:null,
            
          };
      

    componentDidMount(){
        
        db.collection('clients')
        .get()
        .then( snapshot =>{
          const clients =[];
          const ids=[];
          snapshot.forEach(doc=>{
            const data =doc.data();
            const dat =doc.id;
            clients.push(data);
            ids.push(dat)
            
          });
        
          this.setState({
              clients : clients,
              ids : ids
              

            });
          
        })
        .catch(error => console.log(error));
    };
   
  s=() =>{
    console.log(this.state.ids[0]);
   } 

 S

  render(){

  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
              {/* Headline of table */}
            <StyledTableCell>El Code</StyledTableCell>
            <StyledTableCell align="center">Esm el 3amel</StyledTableCell>
            <StyledTableCell align="center">El Mobile</StyledTableCell>
            <StyledTableCell align="center">El mante2a</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>



        <TableBody id="row-sheet">


                { this.state.clients && this.state.clients.map( (client,index) =>{

           
                    return(
                             // Content of Table
                                <StyledTableRow name="client-dd" >
                                    <StyledTableCell name="client-id"  align="left" component="th" scope="row">{client.client_id}</StyledTableCell>
                                    <StyledTableCell name="name"  align="center" component="th" scope="row">{client.name}</StyledTableCell>
                                    <StyledTableCell name="mobile" align="center">{client.mobile}</StyledTableCell>
                                    <StyledTableCell name="region" align="center">{client.region}</StyledTableCell>

                                    
                                            <Button onClick=
                                            {
                                              e=>{
                                                e.preventDefault()

                                                swal("Are you sure u want to remove this client", {
                                                  dangerMode: true,
                                                  buttons: {
                                                    Ok:"OK",
                                                    cancel:"cancel"
                                                  }
                                              })
                                              .then((value)=>{
                                                switch(value){
                                                  case "Ok":
                                                    db.collection('clients').doc(this.state.ids[index]).delete();
                                                    swal("Client has been deleted", " " , "success");
                                                    break

                                                   default:
                                                     swal("nothing is deleted") 
                                                }

                                              })
                                              
                                           
                                          
                                          }
                                           } 
                                           variant="contained"  id="btn" startIcon={<DeleteIcon align="center" />}> Delete
                                           </Button> 
                                          

                                </StyledTableRow>
                                
                             )
                    })
                } 
        </TableBody>




      </Table>
    </TableContainer>
  )
          }
}

export default ClientSheet;