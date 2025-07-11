import React from 'react';
import { Card, Button, CardText, Badge, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function StayCard({ stay }) {
  return (
    <Card
    style={{textDecoration: 'none',  border: 'none'}}
    as={Link} to={`/stay/${stay.id}`} variant="primary"
    >
      <div style={{ position: 'relative', borderRadius: '5px', overflow: 'hidden' }}>
        <Card.Img
          style={{ borderRadius: '5px', width: '100%', height: '260px', display: 'block', objectFit: "cover" }}
          variant="top"
          src={stay.image}
        />
        <Button
          style={{
            position: 'absolute',
            bottom: '-10px',
            right: '-15px',
          }}
        >
    <img
      src="https://www.stayfolio.com/web/images/bookmark-white.svg"
      alt="bookmark"
    />
  </Button>
</div>
      <Card.Body
      style={{textAlign: 'left', marginLeft: '-16px'}}
      >
        {stay.promotion && (
          <Badge bg="primary"
          style={{position: 'absolute', top: '10px', left: '10px', borderRadius: '4px', opacity: '0.9'}}
          >프로모션</Badge>
        )}
        {stay.festival && (
          <Badge bg="secondary"
          style={{position: 'absolute', top: '10px', left: '75px', borderRadius: '4px', opacity: '0.9'}}
          >숙박페스타</Badge>
        )}
        {stay.beststay && (
          <Image
          style={{position: 'absolute', top: '10px', right: '10px'}}
          src='https://www.stayfolio.com/web/images/best-stay-50-badge.svg'>
          </Image>
        )}
        <Card.Title
        style={{fontSize: '20px', fontWeight: 'bold'}}
        >{stay.title}</Card.Title>
        <Card.Text
        style={{marginTop : '-10px', fontSize: '14px', color: '#777'}}
        >{stay.location} · {stay.person}</Card.Text>
        {stay.sale && (
          <Card.Text
          style={{color: '#777', marginTop: '-15px'}}
          >
            <span
            style={{color: '#0D6EFD'}}
            >{stay.rate} </span>
            <s>₩{stay.sale.toLocaleString()}</s>
          </Card.Text>
        )}
        <Card.Text
        style={{fontWeight: 'bold', color: '#333', marginTop: '-15px'}}
        >₩{`${stay.price.toLocaleString()}~`}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StayCard;
