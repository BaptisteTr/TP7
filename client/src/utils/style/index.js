import { useContext } from 'react'
import { ThemeContext } from '../context'
import {createGlobalStyle} from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
* {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
    margin: 0;
    }
`

export default function GlobalStyle() {
    const { theme } = useContext(ThemeContext)
    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}