import React from 'react';
import { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Client from './components/clients';
import Delivery from './components/delivery';
import Order from './components/orders';
import Nav from './components/nav';
import FilterBy from './components/filterby';
 import FilterByClient from './components/filterbyclient';
import Search from './components/search';
import ChooseDelivert from './components/addorderfordelivery';
import DeliveryOrders from './components/deliveryOrders';
import clientProfile from './components/selectClient';
import Calc from './components/calc';
//import Order from './components/orders';





class App extends Component {
  render() {
    return (
      // <div>
      //   <Order/>
      //   <Calc/>
        
      // </div>

      <BrowserRouter>
        <div>

          <Nav />
          <Route exact path='/' component={Client} />
          <Route exact path='/Delivery' component={Delivery} />
          <Route exact path='/Order' component={Order} />
          <Route exact path='/FilterBy' component={FilterBy} />
          <Route exact path='/FilterByClient' component={FilterByClient} />
          <Route exact path='/Search' component={Search} />
          <Route exact path='/ChooseDelivert' component={ChooseDelivert} />
          <Route exact path='/DeliveryOrders' component={DeliveryOrders} />
          <Route exact path='/clientProfile' component={clientProfile} />
          <Route exact path='/Calc' component={Calc} />


        </div>
      </BrowserRouter>
    );
  }
}

export default App;


















// Test1
// class App extends React.Component{

//   render(){
//       return(
//         <div>
//            {/* <Client/>

//           <Delivery/> */}
//     <div className="App__form"></div>
//     <div className="App__Aside"></div>
//         </div>
//       )
//   }
// }

// export default App;








//Test 2 
// <Router basename="/react-auth-ui/">
      //   <div className="App">
      //     <div className="App__Aside"></div>
      //     <div className="App__Form">
      //       <div className="PageSwitcher">
      //           <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
      //           <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
      //         </div>

      //         <div className="FormTitle">
      //             <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
      //         </div>


      //         <Route path="/sign-in" component={Client}>
      //         </Route>
      //     </div>

      //   </div>
      // </Router>