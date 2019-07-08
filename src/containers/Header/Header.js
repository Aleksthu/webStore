import React, {Component} from 'react';

import classes from './Header.module.css';
import mainClasses from '../../App.module.css';

class Header extends Component{
    
    render(){
        return(
            <div className={mainClasses.header}>
                Header
            </div>
        );
    }
}

export default Header;