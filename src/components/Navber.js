import React from 'react';
import { ThemeContext } from '../context/TheamContext';

export default class Navber extends React.Component {

    static contextType = ThemeContext;

    render() {

        const {isLightTheme, light, dark} = this.context;

        const theme = isLightTheme ? light : dark;

        return (
            <>
            <nav style={{background : theme.bg, color : theme.syntex, display : 'inline-block', padding: '0px 30px'}}>
                <h2>LOGO</h2>
            </nav>
            </>
            
        )
    }
}
