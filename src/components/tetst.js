import React, { useEffect, useState } from 'react'
import { db } from '../services/firebase'
const [clients, setClients] = useState([])
useEffect(() => {
    db.collection('clients')
        .get()
        .then(snapshot => {
            const clients = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                clients.push(data);
            });
            setClients(clients);
        })
        .catch(error => console.log(error));
}, [])
export default function tetst() {
    return (
        <div>
            <p>{clients.map(client => client.name)}</p>
        </div>
    )
}
