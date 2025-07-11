import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import StayCard from '../components/StayCard';
import HeroBanner from '../components/HeroBanner'
import StayDetail from '../components/StayDetail';
import {
  dummyStays1, dummyStays2, dummyStays3,
  dummyStays4, dummyStays5, dummyStays6,
  dummyStays7, dummyStays8, dummyStays9,
  dummyStays10
} from '../data/DummyData';

function Home() {
  const navigate = useNavigate();
  return (
    <>
    <HeroBanner />
    <Container className="py-4 mt-5">
      <div className="title-wrap"
      style={{display: "flex", justifyContent: "space-between"}}>
        <div className="title">
          <h2 className="mb-2"
          style={{fontSize: '28px', fontWeight: 'bold'}}
          >지금 강원 여행, 최대 6만원 할인</h2>
          <p
          style={{fontSize: '16px', color: "#777"}}
          >7월 6일까지, 숙박세일페스타 쿠폰 페이지에서 받아보세요!</p>
        </div>
        <Button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          color: "#333",
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        onClick={() => navigate('/StayAllPage')}
        ><i className="bi bi-chevron-right"></i></Button>
      </div>
      <Row>
        {dummyStays1.map(stay => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="py-4">
      <div className="title-wrap"
      style={{display: "flex", justifyContent: "space-between"}}>
        <div className="title">
          <h2 className="mb-2"
          style={{fontSize: '28px', fontWeight: 'bold'}}
          >경주 한옥에서 휴가 보내기</h2>
          <p
          style={{fontSize: '16px', color: "#777"}}
          >숙박 세일 페스타 쿠폰으로 떠날 수 있는 스테이도 포함되어 있어요!</p>
        </div>
        <Button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          color: "#333",
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        onClick={() => navigate('/StayAllPage')}
        ><i className="bi bi-chevron-right"></i></Button>
      </div>
      <Row>
        {dummyStays2.map(stay => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="py-4">
      <div className="title-wrap"
        style={{display: "flex", justifyContent: "space-between"}}>
          <div className="title">
            <h2 className="mb-2"
            style={{fontSize: '28px', fontWeight: 'bold'}}
            >다가오는 여름방학, 가족과 함께</h2>
            <p
            style={{fontSize: '16px', color: "#777"}}
            >긴 휴가에도 부담스럽지 않게, 최대 40% 장박 혜택이 가능한 공간이에요.</p>
          </div>
          <Button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: "#333",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onClick={() => navigate('/StayAllPage')}
          ><i className="bi bi-chevron-right"></i></Button>
      </div>
      <Row>
        {dummyStays3.map(stay => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="py-4">
    <div className="title-wrap"
        style={{display: "flex", justifyContent: "space-between"}}>
          <div className="title">
            <h2 className="mb-2"
            style={{fontSize: '28px', fontWeight: 'bold'}}
            >지금 오픈한 신상 스테이, 최대 20% 할인</h2>
            <p
            style={{fontSize: '16px', color: "#777"}}
            >오픈 기념 할인받고 스테이폴리오에서 가장 먼저 머무는 특권까지!</p>
          </div>
          <Button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: "#333",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onClick={() => navigate('/StayAllPage')}
          ><i className="bi bi-chevron-right"></i></Button>
      </div>
      <Row>
        {dummyStays4.map(stay => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="py-4">
    <div className="title-wrap"
        style={{display: "flex", justifyContent: "space-between"}}>
          <div className="title">
            <h2 className="mb-2"
            style={{fontSize: '28px', fontWeight: 'bold'}}
            >오직, 스테이폴리오에서만</h2>
            <p
            style={{fontSize: '16px', color: "#777"}}
            >스테이폴리오 단독 신상 숙소들을 만나보세요!</p>
          </div>
          <Button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: "#333",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onClick={() => navigate('/StayAllPage')}
          ><i className="bi bi-chevron-right"></i></Button>
      </div>
      <Row>
        {dummyStays5.map(stay => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
    </Container>
    <StayDetail />
    <Container className="py-4 mt-5">
    <div className="title-wrap"
        style={{display: "flex", justifyContent: "space-between"}}>
          <div className="title">
            <h2 className="mb-2"
            style={{fontSize: '28px', fontWeight: 'bold'}}
            >브랜딩 & 디자인 분야 9인의 베스트 스테이</h2>
            <p
            style={{fontSize: '16px', color: "#777"}}
            >매거진B 조수용, 포인트오브뷰 김재원 등 감각이 남다른 이들의 추천 스테이를 알려드려요.</p>
          </div>
          <Button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: "#333",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onClick={() => navigate('/StayAllPage')}
          ><i className="bi bi-chevron-right"></i></Button>
      </div>
      <Row>
        {dummyStays6.map(stay => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="py-4">
    <div className="title-wrap"
        style={{display: "flex", justifyContent: "space-between"}}>
          <div className="title">
            <h2 className="mb-2"
            style={{fontSize: '28px', fontWeight: 'bold'}}
            >건축 & 공간 분야 11인의 베스트 스테이</h2>
            <p
            style={{fontSize: '16px', color: "#777"}}
            >루밍 박근하부터 방송인 마크 테토까지, 안목 있는 공간 여행자의 선택은?</p>
          </div>
          <Button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: "#333",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onClick={() => navigate('/StayAllPage')}
          ><i className="bi bi-chevron-right"></i></Button>
      </div>
      <Row>
        {dummyStays7.map(stay => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="py-4">
    <div className="title-wrap"
        style={{display: "flex", justifyContent: "space-between"}}>
          <div className="title">
            <h2 className="mb-2"
            style={{fontSize: '28px', fontWeight: 'bold'}}
            >기획 & 마케팅 분야 8인의 베스트 스테이</h2>
            <p
            style={{fontSize: '16px', color: "#777"}}
            >스테이폴리오 대표 장인성, 뉴믹스커피 김규림 등 기획자에게 영감을 주는 스테이를 소개해요.</p>
          </div>
          <Button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: "#333",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onClick={() => navigate('/StayAllPage')}
          ><i className="bi bi-chevron-right"></i></Button>
      </div>
      <Row>
        {dummyStays8.map(stay => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="py-4">
    <div className="title-wrap"
        style={{display: "flex", justifyContent: "space-between"}}>
          <div className="title">
            <h2 className="mb-2"
            style={{fontSize: '28px', fontWeight: 'bold'}}
            >예술 & 창작 분야 8인의 베스트 스테이</h2>
            <p
            style={{fontSize: '16px', color: "#777"}}
            >김주이, 소소, 정멜멜 등 창작자 8인에게 물었어요. 당신의 인생 스테이는 어디인가요?</p>
          </div>
          <Button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: "#333",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onClick={() => navigate('/StayAllPage')}
          ><i className="bi bi-chevron-right"></i></Button>
      </div>
      <Row>
        {dummyStays9.map(stay => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="py-4">
    <div className="title-wrap"
        style={{display: "flex", justifyContent: "space-between"}}>
          <div className="title">
            <h2 className="mb-2"
            style={{fontSize: '28px', fontWeight: 'bold'}}
            >신선한 작물이 자라요, 텃밭과 농원이 있는 스테이</h2>
            <p
            style={{fontSize: '16px', color: "#777"}}
            >농작물을 수확해 요리하고 차를 내려 마시거나, 체험형 팜스테이처럼 농원과 목장 등을 경험하는 11곳.</p>
          </div>
          <Button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: "#333",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          onClick={() => navigate('/StayAllPage')}
          ><i className="bi bi-chevron-right"></i></Button>
      </div>
      <Row>
        {dummyStays10.map(stay => (
          <Col key={stay.id} md={6} lg={4} className="mb-4">
            <StayCard stay={stay} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default Home;
