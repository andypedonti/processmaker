import React from "react";
import {Card} from "react-bootstrap";
import {PortfolioContent} from "../PortfolioContent"

const PortfolioItems = () => {
    return(
        <div>
        {
         PortfolioContent.map((item) =>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Link href={item.url} target="_blank" >
         
        <h4>{item.title}</h4>
           
        </Card.Link>
        <Card.Text >
          {item.description}
        </Card.Text>
      </Card.Body>
       
    </Card>
       )
    }
    </div>
    );

    }
export default PortfolioItems;