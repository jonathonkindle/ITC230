import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/" className="navbar-brand">Book List</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Books</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/add" className="nav-link">Add Book</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}