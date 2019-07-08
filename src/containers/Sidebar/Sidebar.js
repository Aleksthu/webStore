import React, {Component} from 'react';

import mainClasses from '../../App.module.css';

class Sidebar extends Component{
    
    render(){
        return(
            <div className={mainClasses.sidebar}>
                Sidebar
            </div>
        );
    }
}

export default Sidebar;