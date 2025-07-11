import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { Container, Row, Col } from 'react-bootstrap';
import StayCard from '../components/StayCard';

import {
  dummyStays1, dummyStays2, dummyStays3,
  dummyStays4, dummyStays5, dummyStays6,
  dummyStays7, dummyStays8, dummyStays9,
  dummyStays10
} from '../data/DummyData';

const allStays = [
  ...dummyStays1, ...dummyStays2, ...dummyStays3,
  ...dummyStays4, ...dummyStays5, ...dummyStays6,
  ...dummyStays7, ...dummyStays8, ...dummyStays9,
  ...dummyStays10,
];

const StayAllPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Container className="py-5">
      <h3 className="mb-4 fw-bold">스테이폴리오가 엄선한 특별한 공간들</h3>
      <p style={{ fontSize: '0.8rem', color: '#666', maxWidth: '600px', marginBottom: '3rem', lineHeight: '1.6' }}>
        일상의 소소한 탈출, 여행의 특별한 기억이 되어줄 감성 가득한 숙소들을 소개합니다.<br />
        자연과 어우러진 편안한 공간, 나만의 힐링 플레이스를 지금 만나보세요.
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

export default StayAllPage