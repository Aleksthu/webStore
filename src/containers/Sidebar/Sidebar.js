import React, { Component } from 'react';

import mainClasses from '../../App.module.css';
import classes from './Sidebar.module.css';

class Sidebar extends Component {

    render() {
        return (
            <div className={mainClasses.sidebar}>
                <div className={classes.sidebar}>
                    <h1>All Categories</h1>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                    <p>Hover dropright Category</p>
                </div>
            </div>
        );
    }
}

export default Sidebar;