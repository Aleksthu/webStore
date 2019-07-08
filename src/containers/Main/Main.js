import React, {Component} from 'react';

import mainClasses from '../../App.module.css';

class Main extends Component{
    
    render(){
        return(
            <div className={mainClasses.main}>
                <div>
                    Current Sales/ Announcement. Big Image
                </div>
                <div>
                    <div>Highlighted Product</div>
                    <div>Highlighted Product</div>
                    <div>Highlighted Product</div>
                    <div>Highlighted Product</div>
                    <div>Highlighted Product</div>
                    <div>Highlighted Product</div>
                </div>
            </div>
        );
    }
}

export default Main;