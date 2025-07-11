import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Container, Row, Col } from 'react-bootstrap';
import StayCard from '../components/StayCard';

// 모든 더미 데이터를 합쳐서 배열로
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

const SearchResult = () => {
  const location = useLocation();
  const { region } = queryString.parse(location.search);

  const normalize = (str) =>
  str.toLowerCase().replace(/\s|\/|시|군|구/g, '');

  const filteredStays = region === '전체'
    ? allStays
    : allStays.filter((stay) => {
      const locNorm = normalize(stay.location);
      const titleNorm = normalize(stay.title);
      const regionNorm = normalize(region);
      return locNorm.includes(regionNorm) || titleNorm.includes(regionNorm);
    });
  return (
    <Container className="py-5">
      <h3 className="mb-3 fw-bold">{region} 검색 결과</h3>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        총 {filteredStays.length}개의 스테이가 있습니다.
      </p>
      <Row>
        {filteredStays.length > 0 ? (
          filteredStays.map((stay) => (
            <Col key={stay.id} md={6} lg={4} className="mb-4">
              <StayCard stay={stay} />
            </Col>
          ))
        ) : (
          <p>해당 지역의 숙소가 없습니다.</p>
        )}
      </Row>
    </Container>
  );
};

export default SearchResult;