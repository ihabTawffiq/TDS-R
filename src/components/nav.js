
import React from 'react';
import '../style/base.css';
// import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink } from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Nav() {

  const classes = useStyles();
  const [setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs

        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <NavLink className="nav-link_IT" exact to='/'><Tab label="el 3omla" /></NavLink>
        <NavLink className="nav-link_IT" exact to='/delivery'><Tab label="el manadeb" /></NavLink>
        <NavLink className="nav-link_IT" exact to='/order'><Tab label="el ordarat" /></NavLink>
        <NavLink className="nav-link_IT" exact to='/FilterBy'><Tab label="filter  el tare5" /></NavLink>
        <NavLink className="nav-link_IT" exact to='/FilterByClient'><Tab label="Filter el 3omla" /></NavLink>
        <NavLink className="nav-link_IT" exact to='/Search'><Tab label="el search" /></NavLink>
        <NavLink className="nav-link_IT" exact to='/ChooseDelivert'><Tab label="Tawze3 Ordarat" /></NavLink>
        <NavLink className="nav-link_IT" exact to='/DeliveryOrders'><Tab label="7esab manadeb" /></NavLink>
        {/* <NavLink className="nav-link_IT" exact to='/clientProfile'><Tab label="7esab el 3amel" /></NavLink> */}
        <NavLink className="nav-link_IT" exact to='/Calc'><Tab label="Calcu" /></NavLink>


      </Tabs>
    </Paper>
  );
}





























// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   Nav,
//   NavItem,
//   NavLink,
//   NavbarText
// } from 'reactstrap';

// const NavBar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar id="v" className="nav"  color="light" light expand="md">

//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//           <NavItem>
//               <NavLink href="/">Client</NavLink>
//             </NavItem>  
//             <NavItem>
//               <NavLink href="/order">Order</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/delivery">Delivery</NavLink>
//             </NavItem>
//           </Nav>
//           <NavbarText>TDS</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default NavBar;




