import React, { Component } from 'react';
import Item from './Item';


class List extends Component {
    render(){
        return (
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                <Item />
            </table>
        )
    }
}

export default List;