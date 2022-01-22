import React from 'react'
import { ThemeContext } from '../context/TheamContext';

export default class Booklist extends React.Component {
    render() {
        return (
            
            <ThemeContext.Consumer>{(context) =>{
                const {isLightTheme, light, dark} = context;
                const theme = isLightTheme ? light : dark;
                return(
                    <ul>
                    <li style={{background : theme.bg, padding : '5px 14px', margin : '12px 0', color : theme.syntex}}>heaven has no favorites - by Maria Remarque</li>
                    <li style={{background : theme.bg, padding : '5px 14px', margin : '12px 0', color : theme.syntex}}>heaven has no favorites - by Maria Remarque</li>
                    <li style={{background : theme.bg, padding : '5px 14px', margin : '12px 0', color : theme.syntex}}>heaven has no favorites - by Maria Remarque</li>
                </ul>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}
