import React, {Component} from 'react';
import './header.scss';

export default class Header extends Component {
    
    
    
    render() {
        return(
            <header className="header">
                <Logo/>
                <Nav/>
                <User/>
            </header>
        )
    }
}


/* Header components */
function Logo() {
    return (
        <div className="logo">Kraiviks</div>
    )
}

function Nav() {
    return (
        <ul className="nav">
            <li className="nav-item">1</li>
            <li className="nav-item">2</li>
            <li className="nav-item">3</li>
        </ul>
    )
}

function User() {
    return (
        <h3>User</h3>
    )
}