import config from './data';
import React, { Component } from 'react';
import style from '../style/hello.css';

class Greeter extends Component {
    render() {
        return (
            <div className={style.root}>
                {config.text}
            </div>
        );
    }
}

export default Greeter