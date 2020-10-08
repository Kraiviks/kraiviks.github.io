import React from 'react';
import Header from '../header/header';
import 'normalize.css';
import './app.scss';
import LeftNav from '../left-nav/left-nav';
import Body from '../body/body';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <LeftNav/>
            <Body/>
        </div>
    )
}
export default App;