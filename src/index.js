import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './components/menu/Menu';
import styles from './base.css';
console.log(ReactDOM);

class App extends Component {
    render() {
        return (
            <div id="app-container">
                <Menu />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
