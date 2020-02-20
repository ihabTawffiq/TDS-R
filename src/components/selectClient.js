import React, { Component } from 'react'
import { db } from '../services/firebase';
import Button from '@material-ui/core/Button';
import Cards from "./cards";
import moment from "moment";

export default class selectClient extends Component {
    state = {
        client: "",
        clients: []
    }
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
            })
            .catch(error => console.log(error));
    }
    handelSelectClient = (e) => {
        this.setState({ client: e.target.value })

    }

    render() {
        return (
            <div>
                <select value={"this.state.client"} onChange={this.handelSelectClient} required >
                    <option onChange={this.handelSelectClient} value={this.state.client}>{this.state.client}</option>
                    {this.state.clients.map(cl => <option value={cl.name}>{cl.name}</option>)}
                </select>

                <Cards client={this.state.client} />
            </div>
        )
    }
}
