import config from './data.json';
import React, { Component } from 'react';
import style from '../style/hello.css';

class Greeter extends Component {
    render() {
        return (
            <div className={style.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter