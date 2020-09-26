import React, {Component} from 'react';
import ItemCard from '../item-card/item-card';
import './body.scss';

export default class Body extends Component {
    
    
    
    render() {
        return(
            <main className="app-body">
                <ItemCard/>
            </main>
        )
    }
}
