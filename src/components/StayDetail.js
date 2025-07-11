import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const StayDetail = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/journal');
  };

  return (
    <div>
      <Container style={{ position: 'relative', padding: 0, width: '100%' }}>
        <Image 
          src='https://image.codenbutter.com/upload/node/2024/d5378e08-27da-41f4-99c1-caeb058b3d55.png' 
          fluid 
          style={{
            borderRadius: "5px",
            overflow: "hidden",
            width: "100%",
            height: "200px",
            objectFit: "cover",
            marginTop: "30px",
            filter: "brightness(90%)"
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            width: '100%',
            padding: '0 20px',
            boxSizing: 'border-box',
            marginTop: "20px"
          }}
        >
          <h3 style={{fontSize: "30px", fontWeight: "bold"}}>NEW STAY</h3>
          <p style={{fontSize: "16px", fontWeight: "bold"}}>가장 먼저 만나는 이달의 신규 스테이</p>
        </div>
      </Container>
      <Container className='mt-5'>
        <Row className = "align-items-center mt-4">
          <Col md={4}>
            <Image src='https://www.stayfolio.com/_next/image?url=https%3A%2F%2Fimages.stayfolio.com%2F5tciz1bs9m1xorq1dzykvowifk87&w=480&q=75' rounded
            style={{ width: '100%', height: '250px', objectFit: 'cover'}}
            ></Image>
          </Col>
          <Col md={8}>
          <h4 className='datailreviewtitle'>경주에서의 오롯이 쉼을 위한 머무름</h4>
          <p style={{color: "#767676"}}>
            황리단길 도보 3분, 한옥 특유의 따뜻함과 단아함이 담겨있는 공간 '오로소이'에서 머무르는 동안 고요함과 편안함을 느껴보세요.
          </p>
          <span>by. 한아름</span>
        </Col>
        </Row>
        <Row className = "align-items-center mt-4">
          <Col md={4}>
            <Image src='https://www.stayfolio.com/_next/image?url=https%3A%2F%2Fimages.stayfolio.com%2Flsbxrsstizvvfjw51akf1relp8pl&w=480&q=75' rounded
            style={{ width: '100%', height: '250px', objectFit: 'cover'}}
            ></Image>
          </Col>
          <Col md={8}>
          <h4 className='datailreviewtitle'>도시 여행자를 위한 부산 전포 1박 2일 코스</h4>
          <p style={{color: "#767676"}}>
            여러 번 가도, 처음 가도 언제나 편안한 곳들. 디테일에 매료되는 부산 로컬 여행 코스를 소개해요. 문화가 흐르는 공간에서 여유로는 시간을 만끽해 보세요.
          </p>
          <span>by. 김문영</span>
        </Col>
        </Row>
        <Row className = "align-items-center mt-4">
          <Col md={4}>
            <Image src='https://www.stayfolio.com/_next/image?url=https%3A%2F%2Fimages.stayfolio.com%2Ftp7wai4scl3ddn4dnhbwvi9k8gz5&w=480&q=75' rounded
            style={{ width: '100%', height: '250px', objectFit: 'cover'}}
            ></Image>
          </Col>
          <Col md={8}>
          <h4 className='datailreviewtitle'>잔잔한 풍경 속 작은 마을의 경주 스테이</h4>
          <p style={{color: "#767676"}}>
            초여름의 숨결이 머무는 곳, 경주의 조용한 마을 속 '호헤 경주'에서 계절과 나란히 쉼을 가져보세요.
          </p>
          <span>by. 안수향</span>
        </Col>
        </Row>
        <div className='stay-travel-more-btn' onClick={handleClick}>스테이 여행기 더 보러가기</div>
      </Container>
      <Container style={{ position: 'relative', padding: 0 }}>
        <Image 
          src='https://image.codenbutter.com/upload/node/2025/c45cf3d2-73c7-4bd4-ab4a-8c8637fd1f1a.jpg?f=jpg' 
          fluid 
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            width: "100%",
            height: "200px",
            objectFit: "cover",
            marginTop: "30px",
            filter: "brightness(80%)"
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            width: '100%',
            padding: '0 20px',
            boxSizing: 'border-box',
            marginTop: "20px"
          }}
        >
          <h3 style={{fontSize: "30px", fontWeight: "bold"}}>MAKE FOLIO</h3>
          <p style={{fontSize: "16px", fontWeight: "bold"}}>공간을 섬세히 채우는 사물 제안</p>
        </div>
      </Container>
    </div>
  )
}

export default StayDetail
