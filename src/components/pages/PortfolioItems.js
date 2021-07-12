import React, {Component} from "react";
import {Card} from "react-bootstrap";
import {PortfolioContent} from "../PortfolioContent";
import styled from "styled-components";
import  img from "../images/015.jpeg";
import  big from "../images/016.jpeg";
import  imgOne from "../images/BigBrown.jpeg";
import  imgTwo from "../images/DSC03191.jpeg";
import  imgThree from"../images/DSC03193 2.jpeg";
import  imgFour from "../images/DSC03195.jpeg";
import  ImgFive from "../images/DSC03197.jpeg";
import {device} from "../device";

const Container = styled.div`
display: flex;
flex-flow: row wrap;
align-content: flex-start;
position: relative;
justify-content: center;
aling-items: center;
width: 100%;
margin-left:  auto;
margin-right: auto;
height: 100vh;
`;

const CardSize = styled.div`

width: 250px;
height: 250px;
display: grid;
justify-content: center;
margin: 5px;
align-items: center;
display: block;
border: 1px;

`;

const ImgSize = styled.div`
`;



const PortfolioItems = () => {
  
    
    return(
      
      
      <Container style={{backgroundColor: "#F7F7F2"}}>
     
           <CardSize>
             
               
               <Card >
               <Card.Img variant="top"  src={img} alt="Img" style={{width: "248px", height: "164px"}} />
               <Card.Body style={{backgroundColor: "#121113"}}>
                 <Card.Link href="https://andypedonti.github.io/weatherApp/" target="_blank" >
           
                 <h4 style ={{color: '#F7F7F2'}}>weatherApp</h4>
           
                 </Card.Link>
                 
               </Card.Body>
               </Card>
               </CardSize>
               <br />
             <CardSize>
             <Card >
             <Card.Img variant="top"  src={big} alt="Img" style={{width: "248px", height: "164px"}} />
             <Card.Body style={{backgroundColor: "#121113"}}>
               <Card.Link href="https://github.com/andypedonti/pesticideRecord" target="_blank" >
        
               <h4 style ={{color: '#F7F7F2'}}>readMeGenerator</h4>
        
               </Card.Link>
              
             </Card.Body>
             </Card>
             </CardSize>

             <br />
             <CardSize>
             <Card >
             <Card.Img variant="top"  src={imgOne} alt="Img" style={{width: "248px", height: "164px"}} />
             <Card.Body style={{backgroundColor: "#121113"}}>
               <Card.Link href="https://andypedonti.github.io/workDayPlanner/" target="_blank" >
        
               <h4 style ={{color: '#F7F7F2'}}>readMeGenerator</h4>
        
               </Card.Link>
              
             </Card.Body>
        
           </Card>
           </CardSize>
           <br />
           <CardSize>
             <Card >
             <Card.Img variant="top"  src={imgThree} alt="Img" style={{width: "248px", height: "164px"}} />
             <Card.Body style={{backgroundColor: "#121113"}}>
               <Card.Link href="https://andypedonti.github.io/javaQuiz/" target="_blank" >
        
               <h4 style ={{color: '#F7F7F2'}}>troutTester</h4>
        
               </Card.Link>
              
             </Card.Body>
        
           </Card>
           </CardSize>
           <br />
           <CardSize>
             <Card >
             <Card.Img variant="top"  src={imgTwo} alt="Img" style={{width: "248px", height: "164px"}} />
             <Card.Body style={{backgroundColor: "#121113"}}>
               <Card.Link href="https://andypedonti.github.io/workDayPlanner/" target="_blank" >
        
               <h4 style ={{color: '#F7F7F2'}}>noteTaker</h4>
        
               </Card.Link>
              
             </Card.Body>
        
           </Card>
           </CardSize>
           <br />
           <CardSize>
             <Card >
             <Card.Img variant="top"  src={imgFour} alt="Img" style={{width: "248px", height: "164px"}} />
             <Card.Body style={{backgroundColor: "#121113"}}>
               <Card.Link href="https://andypedonti.github.io/newReactPortfolio/" target="_blank" >
        
               <h4 style ={{color: '#F7F7F2'}}>ReactPortfolio</h4>
        
               </Card.Link>
              
             </Card.Body>
        
           </Card>
           </CardSize>
           <br />
           <CardSize>
             <Card >
             <Card.Img variant="top"  src={ImgFive} alt="Img" style={{width: "248px", height: "164px"}} />
             <Card.Body style={{backgroundColor: "#121113"}}>
               <Card.Link href="https://github.com/andypedonti/processmaker" target="_blank" >
        
               <h4 style ={{color: '#F7F7F2'}}>ProcessMaker</h4>
        
               </Card.Link>
              
             </Card.Body>
        
           </Card>
           </CardSize>

          </Container>
        
          )
    }
       
    
    
    

    
export default PortfolioItems;