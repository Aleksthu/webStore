import React, { Component } from 'react';

import classes from './Header.module.css';
import mainClasses from '../../App.module.css';

class Header extends Component {

    render() {
        return (
            <div className={mainClasses.header}>
                <div className={classes.header}>
                    <h1 className={classes.logo}>LOGO</h1>
                    <form className={classes.searchBar}>
                        <input placeholder="search among x amount of articles" />
                        <button>Search</button>
                    </form>
                    <a className={classes.register}>SignUp/Login</a>
                </div>
            </div>
        );
    }
}

export default Header;