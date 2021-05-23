// eslint-disable-next-line
import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bd-dark: #1a2f3a

        --logo-height: 100px;
        --header-height: 100px;
        --aside-width: 225px;
        --footer-height: 40px;

        --shadow:
            0 2px 23px 0 rgba(0, 0, 0, 0.1), 
            0 2px 49px 0 rgba(0, 0, 0, 0.06), 
    }

    *{
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        margin: 0px;
        display: grid;
        grid-template-columns: var(---aside-width) 1fr;
        grid-template-rows:
            var(--header-height)
            1fr 
            var(--footer-height);
        grid-template-areas:
            'logo header'
            'menu content'
            'menu footer';
        height: 100vh;
        background-color: #f5f5f5;
    }
`;

export default GlobalStyle;