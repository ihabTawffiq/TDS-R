import React from 'react';
import { db } from '../services/firebase';
import Table from "./table";
import Button from '@material-ui/core/Button';
import DateSelector from "./dateSelector";
import Cards from "./cards"
class FilterBy extends React.Component {


    state = {

        order: [],
        clients: [],
        client: "Choose Client",
        filteredOrders: []

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

                orders.sort((a, b) => {
                    if (a.order_id > b.order_id) {
                        return -1
                    } else
                        return 1
                })
                this.setState({
                    order: orders,
                });
            })
            .catch(error => console.log(error));
        const filteredOrders = this.state.order.filter(order => {
            return (order.client === this.state.client)
        })
        this.setState({ filteredOrders })


    };


    handelSelectClient = (e) => {
        this.setState({ client: e.target.value })

    }
    handelFilter = () => {
        const filteredOrders = this.state.order.filter(order => {
            console.log(order.client, this.state.client)
            return (order.client === this.state.client)
        })
        this.setState({ filteredOrders })
        console.log(this.state.filteredOrders)

    }
    render() {
        return (
            <div>
                <center> <h2>*******************Filter by Date Section****************</h2> </center>
                <DateSelector orders={this.state.order} />
                <br />
                <br />
                <br />

                <center> <h2> *******************Filter by Client and Date Section**************** </h2> </center>
                <center><select value={"this.state.client"} onChange={this.handelSelectClient} required >
                    <option onChange={this.handelSelectClient} value={this.state.client}>{this.state.client}</option>
                    {this.state.clients.map(cl => <option value={cl.name}>{cl.name}</option>)}
                </select>
                </center>
                <center>
                    <Button variant="contained" color="secondary" onClick={this.handelFilter}>
                        Filter by Client
                    </Button>
                </center>
                <DateSelector orders={this.state.filteredOrders} />

            </div >
        )
    }

}
export default FilterBy;