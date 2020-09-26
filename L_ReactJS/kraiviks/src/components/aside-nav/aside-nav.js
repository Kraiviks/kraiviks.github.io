import React, {Component} from 'react';
import './aside-nav.scss';

export default class AsideNav extends Component {
    render() {
        return(
            <aside className="aside-nav">
                <ul className="left-nav">
                    <li className="left-nav__item">Anime</li>
                    <li className="left-nav__item">Manga</li>
                    <li className="left-nav__item">Films</li>
                </ul>
            </aside>
        )
    }
}
