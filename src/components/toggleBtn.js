import React, { Component } from 'react';
import { ThemeContext } from '../context/TheamContext';

class ToggleTheme extends Component {
    render() {
        return (
          <ThemeContext.Consumer>{(context) =>{

            const {isLightTheme, light, dark, toggleTheme} = context;
            const theme = isLightTheme ? light : dark;

              return (
                <button onClick={toggleTheme} style={{color: theme.syntex, background : theme.bg, fontWeight : '600', padding: '7px 20px', border : 'none', borderRadius: '6px'}}>{isLightTheme ? 'Switch to Dark' : 'Switch to Light'}</button>
              );
          }}

          </ThemeContext.Consumer>
        );
    }
}

export default ToggleTheme;