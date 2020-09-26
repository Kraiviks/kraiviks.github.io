import React, {Component} from 'react';
import UserProfile from '../user-profile/user-profile';
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
        <nav>
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item"
                /*onClick={showLeftNav}*/>Viks</li>
                <li className="nav-item">🛠</li>
            </ul>
        </nav>
    )
}

function User() {
    return (
        <h3 /*onClick={showUserProfile}*/>User</h3>
    )
}