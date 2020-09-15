import React, {Component} from 'react';
import './app.scss';

import Header from '../header/header';
import Body from '../body/body';
import ToDoList from '../to-do-list/to-do-list';

export default class App extends Component {
    
    
    
    render() {
        return(
            <div className="app">
                <Header/>
                <div className="row body-wrap">
                    <Body/>
                    <ToDoList/>
                </div>
            </div>
        )
    }
}
