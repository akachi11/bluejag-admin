import { createGlobalStyle } from 'styled-components'
import { colors, Themes } from './Colors'

export const GlobalStyles = createGlobalStyle`
    ::-webkit-scrollbar {
        width: 5px; 
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.darkMode ? Themes.dark.mainBg2 : Themes.light.mainBg};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px; 
        background-color: ${props => props.darkMode ? Themes.dark.mainBg : colors.grey1};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

`