import React from 'react';
import { useParams } from 'react-router-dom';
import { travelStays } from '../data/DummyData';
import { Container, Image } from 'react-bootstrap';

const TravelDetail = () => {
  const { id } = useParams();
  const stay = travelStays.find((item) => item.id === parseInt(id));
  if (!stay) {
    return <div>해당 여행기를 찾을 수 없습니다.</div>;
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
        <h2 style={{color: "#fff", fontWeight: "bold", fontSize: "35px"}}>{stay.subtitle}</h2>
        <p style={{fontSize: "18px"}}>{stay.title}</p>
        <p>{stay.by}</p>
      </div>
      </div>
      <Container className="my-5">
        <h4 style={{padding: "30px 0", fontWeight: "500"}}>{stay.datailTitle}</h4>
        <Image style={{margin: "30px 0"}} src={stay.detailImg1} alt={stay.title} fluid />
        <p>{stay.detailDesc1}</p>
        <Image style={{margin: "30px 0"}} src={stay.detailImg2} alt={stay.title} fluid />
        <p>{stay.detailDesc2}</p>
        <Image style={{margin: "30px 0"}} src={stay.detailImg3} alt={stay.title} fluid />
        <p>{stay.detailDesc3}</p>
        <Image style={{margin: "30px 0"}} src={stay.detailImg4} alt={stay.title} fluid />
        <p>{stay.detailDesc4}</p>
      </Container>
    </div>
  );
};

export default TravelDetail;