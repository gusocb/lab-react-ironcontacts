import React, { Component } from 'react';
import contacts from './contacts.json';


class Item extends Component {
    render () {
        // const fiveContacts = contacts.map()
        return(
            <tr>
                <td><img src={contacts[0].pictureUrl} /></td>
                <td>{contacts[0].name}</td>
                <td>{contacts[0].popularity}</td>
            </tr>
        )
    }
};

export default Item;