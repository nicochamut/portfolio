import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1700px){
        font-size: 75%
    }
   
    
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
   
}

body::-webkit-scrollbar {
  width: 5px;   
}
body::-webkit-scrollbar-track {
 background: linear-gradient(to bottom, black, #424242)  
}

body::-webkit-scrollbar-thumb {
  background-color: #5f5f5f; 
  border-radius: 20px;    

}
button{
 font-weight: bold;
 font-size: 1.1rem;
 cursor: pointer;
 padding: 1rem 2rem;
 border: 3px solid #23d997;
 background: transparent;
 font-family: 'Inter', sans-serif;
 color: white;
 transition: all 0.5s ease;
 &:hover {
     background-color: #23d997;
     color: white;
 }

}

h2 {
     font-weight: lighter;
     font-size: 4rem;
 }

 h3{
     color: white;
 }
 h4{
     font-weight: bold;
     font-size: 2rem
 }
 a{
     font-size: 1.1rem;
 }
 span{
     font-weight: bold;
     color: #26eea5;
 }
 p{
     padding: 3rem 0rem;
     color: #ccc;
     font-size: 1.4rem;
     line-height: 150%;
 }

`;


export default GlobalStyle