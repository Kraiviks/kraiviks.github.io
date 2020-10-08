import React, {Component} from 'react';
import './left-nav.scss';

export default class LeftNav extends Component {
    render() {
        return(
            <aside className="left-nav">
                <ol className="viks">
                    <Viks/>
                </ol>
            </aside>
        )
    }
}

const Viks = () => {
    return(
        <li className="viks-item">Anime</li>
    )
}