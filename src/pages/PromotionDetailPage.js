// pages/PromotionDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { editorStays, eventStays } from '../data/DummyData';
import { Container, Image, Col, Row, Button } from 'react-bootstrap';

const PromotionDetailPage = () => {
  const { id } = useParams();
  const stayId = parseInt(id, 10);

  const stay =
    editorStays.find((item) => item.id === stayId) ||
    eventStays.find((item) => item.id === stayId);

  if (!stay) {
    return <Container><h3>해당 프로모션을 찾을 수 없습니다.</h3></Container>;
  }

  return (
    <div>
      <Container style={{position: "relative"}}>
        <Image src={stay.bgImg} alt={stay.title} style={{ filter: "brightness(80%)", width: "100%" }} />
          <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "#fff",}}>
            <h2 style={{ fontWeight: "bold", fontSize: "35px"}}>{stay.title}</h2>
            <p style={{ fontWeight: "bold", }}>{stay.date}</p>
          </div>
      </Container>
      <Container style={{textAlign: "center", marginTop: "30px", color: "#4D4D4D", fontSize: "18px"}}>
        <div style={{width: "50%", margin: "auto"}}>
        <h2 style={{color: "#333", fontWeight: "bold", marginBottom: "20px", fontSize: "30px"}}>{stay.detailtitle}</h2>
        <p style={{marginTop: "30px"}}>{stay.detailDesc1}</p>
        <p style={{marginTop: "30px"}}>{stay.detailDesc2}</p>
        <p style={{paddingBottom: "20px", marginTop: "30px"}}>{stay.detailDesc3}</p>
        </div>
      </Container>
      <Container className="my-5">
        <Row className="align-items-center" style={{backgroundColor: "#FAFAFA",}}>
          <Col md={6}>
            <img
              src={stay.detailImg}
              alt={stay.title}
              style={{ width: "100%", borderRadius: "2px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6} className="promotionevent">
            <div style={{marginLeft: "20px"}}>
            <span style={{ fontWeight: 'bold', fontSize: "25px", marginRight: "20px"}}>대상</span>
            <span style={{ color: '#666', fontSize: '25px'}}>{stay.detailTarget}</span>
            <hr />
            <span style={{ fontWeight: 'bold', fontSize: "25px", marginRight: "20px"}}>기간</span>
            <span style={{ color: '#666', fontSize: '25px'}}>{stay.date}</span>
            <br/>
            <Link to="/findStay" className='link' style={{textDecoration: "none", marginTop: "50px", display: "block", color: "#333"}}>{stay.button}</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromotionDetailPage;
