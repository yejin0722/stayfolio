import React, { useState } from 'react';
import { Container, Card, Button, CardText, Badge, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { travelStays, magazineStays } from '../data/DummyData';

const Journal = () => {
  const [selectedCategory, setSelectedCategory] = useState('TRAVEL');
  const getCategoryData = () => {
    if (selectedCategory === 'TRAVEL') {
      return travelStays;
    } else if (selectedCategory === 'MAGAZINE') {
      return magazineStays;
    }
  };
  return (
    <div>
      <Container>
      <div className="d-flex justify-content-center my-5">
        {['TRAVEL', 'MAGAZINE'].map((category) => (
        <Button
          key={category}
          variant="link"
          onClick={() => setSelectedCategory(category)}
          style={{
            fontWeight: selectedCategory === category ? 'bold' : 'normal',
            color: selectedCategory === category ? '#333' : '#bbb',
            textDecoration: 'none',
            borderBottom: selectedCategory === category ? '3px solid #333' : 'none',
            borderRadius: 0,
            paddingBottom: '2px',
            marginLeft: "20px",
            fontSize: "20px"
          }}
        >
          {category}
        </Button>
        ))}
      </div>
      {selectedCategory === 'TRAVEL' && (
        <Row>
          {travelStays.map((stay) => (
            <Col key={stay.id} md={4} className="mb-4">
              <Link to={`/journal/travel/${stay.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card>
                <Card.Img variant="top" src={stay.image} />
                <Card.Body>
                  <Card.Title
                    style={{color: "#333", fontWeight: "bold", fontSize: "20px"}}
                  >{stay.title}</Card.Title>
                  <Card.Text
                    style={{color: "#767676", fontWeight: "100"}}
                  >{stay.desc}</Card.Text>
                  <small>{stay.by}</small>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
      {selectedCategory === 'MAGAZINE' && (
        <Row>
          {magazineStays.map((stay) => (
            <Col key={stay.id} md={6} className="mb-4 position-relative">
              <Link to={`/journal/magazine/${stay.id}`} style={{ textDecoration: 'none' }}>
              <div style={{ position: 'relative', overflow: 'hidden'}}>
                <img
                  src={stay.image}
                  alt={stay.title}
                  style={{
                    width: '100%',
                    height: '600px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                    display: 'block'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#fff',
                    padding: '20px 30px',
                    textAlign: 'center',
                    width: '60%',
                    height: "60%",
                    display: "flex", 
                    flexDirection: "column",
                    justifyContent: "space-evenly"
                  }}
                >
                  <h4 style={{fontSize: "30px", fontStyle: "italic", color: "#c0c0c0"}}>{stay.number}</h4>
                  <h3 style={{ fontSize: "25px", fontWeight: '100', color: '#333'}}>{stay.title}</h3>
                  <small className="text-muted">{stay.by}</small>
                  <a style={{display: "block", color: "#333"}} href='#none'>read more</a>
                </div>
              </div>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </Container>
    </div>
  )
}

export default Journal
