import React, {Component} from 'react';

import mainClasses from '../../App.module.css';
import classes from './Footer.module.css';

class Footer extends Component{
    
    render(){
        return(
            <div className={mainClasses.footer}>
                <div className={classes.footer}>
                    Footer
                </div>
            </div>
        );
    }
}

export default Footer;