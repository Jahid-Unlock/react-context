import React, { Component } from 'react'
import Navbar from './Navber';
import Booklist from './Booklist';
import { ThemeContext } from '../context/TheamContext';
import ToggleTheme from './toggleBtn';

export default class componentName extends Component {

    static contextType = ThemeContext;

    render() {

        const {isLightTheme, light, dark} = this.context;

        const theme = isLightTheme ? light : dark;

        return (
            <div style={{background : theme.ui, padding : '30px 40px', borderRadius : '6px'}}>
                <Navbar />
                <Booklist />
                <ToggleTheme />
            </div>
        )
    }
}
