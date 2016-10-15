import React, { Component } from 'react';
import style from './menu.css';

export const Menu = () => {
    return (
        <ul className="menu">
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="/portfolio">Portfolio</a>
            </li>
            <li>
                <a href="/open-source">Open Source</a>
            </li>
        </ul>
    );
};
