import React, {Component} from 'react';

import ControlledCarousel from '../../components/Bootstrap/Carousel/Carousel';

import classes from './Main.module.css';
import mainClasses from '../../App.module.css';

class Main extends Component{
    
    render(){
        return(
            <div className={mainClasses.main}>
                <div>
                    <ControlledCarousel/>
                </div>
                <div className={classes.gridContainer}>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                    <div className={classes.highlightedProduct}>
                        <h2>Highlighted Product</h2>
                        <img placeholder='Image missing'/>
                        <ul>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                            <li>Product Specifications</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;