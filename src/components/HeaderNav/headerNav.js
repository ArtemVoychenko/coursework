import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../styles/index.css'


class HeaderNav extends Component {
    render() {
        return (
            <div className="headerNav">
            <div className="container">
                <div className="row">
                    <div className="col-12">
            <nav>
                        <Link style={{textDecoration: "none"}} to="/">Home</Link>
                <br/>
                        <Link style={{textDecoration: "none",marginLeft:"10px"}} to="/favorites">Favorite</Link>
                <br/>
                        <Link style={{textDecoration: "none",marginLeft:"10px"}} to="/about">About</Link>
            </nav>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

HeaderNav.propTypes = {};

export default HeaderNav;