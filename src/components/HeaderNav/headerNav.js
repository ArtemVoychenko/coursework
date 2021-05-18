import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import '../../styles/index.css'


class HeaderNav extends Component {
    render() {
        return (
            <div className="headerNav">
            <div className="container">
                <div className="row">
                    <div className="col-12">
            <nav>
                {/*<ul>*/}
                    {/*<li>*/}
                        <Link style={{textDecoration: "none"}} to="/">Home</Link>
                <br/>
                    {/*</li>*/}
                    {/*<li>*/}
                        <Link style={{textDecoration: "none",marginLeft:"5px"}} to="/about">About</Link>
                    {/*</li>*/}
                {/*</ul>*/}
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