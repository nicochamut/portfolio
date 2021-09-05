import React from "react";
import home1 from "../img/home1.png"
//styled
import styled from "styled-components";

const AboutSection = () => {
    return(
         <About>
             <Description>
                 <div className="title">
                     <div className="hide">
                         <h2>We work to make</h2>
                     </div>
                     <div className="hide">
                         <h2>your <span>dreams</span> </h2>
                     </div>
                     <div className="hide">
                         <h2>come true.</h2>
                     </div>
                 </div>
                 <p> 
                     Contact us for any photography ideas that you have.
                     We have professionals with amazing skills
                 </p>
                 <button>Contact us</button>
             </Description>
             <Image>
                  <img src={home1} alt="guy with camera" />  
             </Image> 
         </About>
    )
}

//Styled Component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
`
const Image = styled.div`
flex: 1;
`


export default AboutSection 