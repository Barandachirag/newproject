import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import product1 from '../card/image/product1.jpg'; 
import product2 from '../card/image/product2.jpg'; 
import product3 from '../card/image/product3.jpg'; 
import product4 from '../card/image/product4.jpg'; 
import product5 from '../card/image/product5.jpg'; 

function CustomCard() {
  return (
    <div>
      <h1>Popular Products</h1>
      <Container className="my-4"> {/* Adds margin to the top and bottom */}
      <Row>
        <Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img variant="top" src={product1} />
            {/* <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Seeds of Change Organic Quinoa, Brown</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item >Seeds of Change Organic Quinoa, Brown</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>NestFood</span></ListGroup.Item> <br />
              <ListGroup.Item> <span style={{color :'#3bb77e', fontWeight : '700'}}>$238.85</span>
                   <Button  style={{margin:'0 50px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
            </ListGroup.Item>
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body>
           
            
             
            </Card.Body> */}
          </Card>
        </Col>

        <Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img variant="top" src={product2} />
            {/* <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is some text for card 2.</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item>All Natural Italian-Style Chicken Meatballs</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>NestFood</span> </ListGroup.Item> <br />
              <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$78</span>
              <Button  style={{margin:'0 70px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
              </ListGroup.Item>
             
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body>
           
              <Card.Link href="#">Card Link 2</Card.Link>
              <Card.Link href="#">Another Link 2</Card.Link>
            </Card.Body> */}
          </Card>
        </Col>

        <Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img variant="top" src={product3} />
            {/* <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is some text for card 3.</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item>Angie’s Boomchickapop Sweet & Salty</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>NestFood</span> </ListGroup.Item> <br />
              <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$35</span>
              <Button  style={{margin:'0 50px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
              </ListGroup.Item>
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body> */}
            {/* <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$35</span></ListGroup.Item> */}
              {/* <Card.Link href="#">Card Link 3</Card.Link>
              <Card.Link href="#">Another Link 3</Card.Link> */}
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img variant="top" src={product4} />
            {/* <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>This is some text for card 4.</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item>Foster Farms Takeout Crispy Classic</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>NestFood</span> </ListGroup.Item> <br />
              <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$55</span>
              <Button  style={{margin:'0 50px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
              </ListGroup.Item>
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body> */}
            {/* <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$55</span></ListGroup.Item> */}
              {/* <Card.Link href="#">Card Link 4</Card.Link>
              <Card.Link href="#">Another Link 4</Card.Link> */}
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img variant="top" src={product5} />
            {/* <Card.Body>
              <Card.Title>Card 5</Card.Title>
              <Card.Text>This is some text for card 5.</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item>Green Diamond Almonds Lightly From Oska</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>NestFood</span> </ListGroup.Item> <br />
              <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$110</span>
              <Button  style={{margin:'0 50px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
              </ListGroup.Item>
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body> */}
            {/* <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$110</span></ListGroup.Item> */}
              {/* <Card.Link href="#">Card Link 5</Card.Link>
              <Card.Link href="#">Another Link 5</Card.Link> */}
            {/* </Card.Body> */}
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    

    
  );
}

export default CustomCard;



