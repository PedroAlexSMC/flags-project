import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }
    body{
        min-width: 100vw;
        min-height: 100vh;
    }
    #root{
        min-width: 100vw;
        min-height: 100vh;
    }
    ::-webkit-scrollbar {
    width: 12px;
}
 
    ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
    ::-webkit-scrollbar-thumb {
    background-color: hsla(207, 26%, 17%,0.4);
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
`;
