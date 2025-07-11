import React from 'react'
import { Container, Card, Button, CardText, Badge, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { editorStays, eventStays } from '../data/DummyData';

const Promotion = () => {
  
  return (
  <div>
    <Container>
      <h3 className="my-4 fw-bold">에디터의 추천</h3>
      <Row>
        {editorStays.map((stay) => (
          <Col key={stay.id} md={4} className="mb-4">
            <Link to={`/promotion/${stay.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card>
              <Card.Img
                style={{ borderRadius: '5px 5px 0 0', width: '100%', height: 'auto', display: 'block' }}
                variant="top"
                src={stay.image}
              />
              <Card.Body>
                <Card.Title
                style={{color: "#333", fontWeight: "bold", fontSize: "20px"}}
                >{stay.title}</Card.Title>
                <Card.Text
                style={{color: "#767676", fontWeight: "100"}}
                >{stay.desc}</Card.Text>
                <Badge bg="light" className="me-2" text="primary">{stay.sale}</Badge>
                <Badge bg="light" text="dark">{stay.date}</Badge>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <h3 className="my-4 fw-bold">이벤트</h3>
      <Row>
        {eventStays.map((stay) => (
          <Col key={stay.id} md={4} className="mb-4">
            <Link to={`/promotion/${stay.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card>
              <Card.Img
                style={{ borderRadius: '5px 5px 0 0', width: '100%', height: 'auto', display: 'block' }}
                variant="top"
                src={stay.image}
              />
              <Card.Body>
                <Card.Title
                style={{color: "#333", fontWeight: "bold", fontSize: "20px"}}
                >{stay.title}</Card.Title>
                <Card.Text
                style={{color: "#767676", fontWeight: "100"}}
                >{stay.desc}</Card.Text>
                <Badge bg="light" className="me-2" text="primary">{stay.sale}</Badge>
                <Badge bg="light" text="dark">{stay.date}</Badge>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  )
}

export default Promotion
