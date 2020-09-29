import React, {Component} from 'react';
import './header.scss';

export default class Header extends Component {
    render() {
        return(
            <header className="header">
                <Logo/>
                <Nav/>
                <UserProfile/>
            </header>
        )
    }
}

const Logo = () => {
    return(
        <div className="logo">Kraiviks</div>
    )
}

const Nav = () => {
    return(
        <nav className="nav">
            <ol className="nav-list">
                <li className="list_item"><a href="#">Home</a></li>
                <li className="list_item"><a href="#">Viks</a></li>
                <li className="list_item"><a href="#">🛠</a></li>
            </ol>
        </nav>
    )
}

const UserProfile = () => {
    return(
        <div className="user-profile">@</div>
    )
}