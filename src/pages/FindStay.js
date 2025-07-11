import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { Container, Row, Col } from 'react-bootstrap';
import StayCard from '../components/StayCard';

import {
  dummyStays11, dummyStays2, dummyStays3,
  dummyStays4, dummyStays5, dummyStays6,
  dummyStays7, dummyStays8, dummyStays9,
  dummyStays10
} from '../data/DummyData';

const allStays = [
  ...dummyStays11, ...dummyStays2, ...dummyStays3,
  ...dummyStays4, ...dummyStays5, ...dummyStays6,
  ...dummyStays7, ...dummyStays8, ...dummyStays9,
  ...dummyStays10,
];

const FindStay = () => {
  return (
    <div>
      <Container className="py-5">
      <h3 className="mb-4 fw-bold">FIND STAY</h3>
      <p style={{ fontSize: '0.8rem', color: '#666', maxWidth: '600px', marginBottom: '3rem', lineHeight: '1.6' }}>
        나만의 취향으로 찾는 스테이,<br />
        잊지 못할 여행을 위한 첫걸음.
      </p>
      <Row>
        {allStays.map((stay) => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  )
}

export default FindStay
