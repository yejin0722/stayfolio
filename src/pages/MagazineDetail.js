import React from 'react';
import { useParams } from 'react-router-dom';
import { magazineStays } from '../data/DummyData';
import { Container, Image, Row, Col } from 'react-bootstrap';

const MagazineDetail = () => {
  const { id } = useParams();
  const stay = magazineStays.find((item) => item.id === parseInt(id));
  if (!stay) {
    return <div>해당 게시글을 찾을 수 없습니다.</div>;
  }
  return (
    <div>
      <div style={{
        backgroundImage: `url(${stay.bgImg})`, height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: "relative",
        }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 1,
            }}
          ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            zIndex: 2,
          }}>
        <p style={{fontSize: "35px"}}>{stay.title}</p>
        <p>{stay.by}</p>
      </div>
      </div>
      <Container className="my-5">
      <Image style={{margin: "30px 0"}} src={stay.detailImg1} alt={stay.title} fluid />
      </Container>
      <Container style={{ maxWidth: "1300px", marginTop: "80px" }}>
        <Row>
          <Col md={4}>
            <p style={{ fontSize: "14px", fontWeight: "600", color: "#999" }}>WHY</p>
            <h3 style={{ fontSize: "22px", fontWeight: "600", marginTop: "10px" }}>
              {stay.datailTitle}
            </h3>
          </Col>
          <Col md={8}>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>{stay.detailDesc1}</p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginTop: "20px" }}>{stay.detailDesc2}</p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginTop: "20px" }}>{stay.detailDesc3}</p>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
      <Image style={{margin: "30px 0"}} src={stay.detailImg2} alt={stay.title} fluid />
      </Container>
    </div>
  );
};

export default MagazineDetail;