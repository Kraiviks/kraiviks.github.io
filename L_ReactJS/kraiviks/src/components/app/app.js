import React, {Component} from 'react';
import './app.scss';

import Header from '../header/header';
import Body from '../body/body';

export default class App extends Component {
    
    
    
    render() {
        return(
            <div className="app">
                <Header/>
                <Body/>
            </div>
        )
    }
}
