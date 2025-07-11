import React from 'react'
import { Carousel, Image } from 'react-bootstrap';

const HeroBanner = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <Image src='https://www.stayfolio.com/_next/image?url=https%3A%2F%2Fimages.stayfolio.com%2Fsystem%2Fpictures%2Fimages%2F000%2F274%2F789%2Foriginal%2F7400ff1676e8893510b4a0069b637fb89d4d1954.jpg%3F1750992114&w=1920&q=75'
        alt="First slide"
        fluid
        style={{ width: '100%', height: '500px', objectFit: 'cover', filter: "brightness(80%)" }}></Image>
        <Carousel.Caption
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          bottom: 'initial',
        }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>황리단길 옆 아담한 한옥 <br /> 오로소이 숙박권 이벤트</h2>
          <p style={{ fontSize: '1.5rem' }}>성수기에 사용 가능한 무료 숙박권과 30% 할인권</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://www.stayfolio.com/_next/image?url=https%3A%2F%2Fimages.stayfolio.com%2Fsystem%2Fpictures%2Fimages%2F000%2F272%2F780%2Foriginal%2F14cc3124230c0666432d3f70b4b7cba154f4a7b8.jpg%3F1749701240&w=1920&q=75'
        alt="First slide"
        fluid
        style={{ width: '100%', height: '500px', objectFit: 'cover', filter: "brightness(80%)" }}></Image>
        <Carousel.Caption
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          bottom: 'initial',
        }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>다가오는 여름 휴가, <br /> 여행을 넘어 살아보기</h2>
          <p style={{ fontSize: '1.5rem' }}>3박 20%, 4박 30%, 5박 40% <br /> 쌓여가는 할인혜택</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://www.stayfolio.com/_next/image?url=https%3A%2F%2Fimages.stayfolio.com%2Fsystem%2Fpictures%2Fimages%2F000%2F275%2F093%2Foriginal%2F98771953a813867cb00d4e6d7863a768fa84d20e.jpg%3F1751254622&w=1920&q=75'
        alt="First slide"
        fluid
        style={{ width: '100%', height: '500px', objectFit: 'cover', filter: "brightness(80%)" }}></Image>
        <Carousel.Caption
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          bottom: 'initial',
        }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>경복궁역 도보 10분, <br /> 최대 10명이 머무를 수 있는 곳</h2>
          <p style={{ fontSize: '1.5rem' }}>섬세하고 모던한 인테리어 <br /> 지금 예약하면 10% 할인</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://www.stayfolio.com/_next/image?url=https%3A%2F%2Fimages.stayfolio.com%2Fsystem%2Fpictures%2Fimages%2F000%2F275%2F698%2Foriginal%2F20d6710dc547e27bb8ed0506bdb4e7db0061a420.jpg%3F1751512431&w=1920&q=75'
        alt="First slide"
        fluid
        style={{ width: '100%', height: '500px', objectFit: 'cover', filter: "brightness(80%)" }}></Image>
        <Carousel.Caption
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          bottom: 'initial',
        }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>동해의 가장 끝, <br /> 바다와 맞닿은 이스트케이프</h2>
          <p style={{ fontSize: '1.5rem' }}>인피티니 풀, 오션뷰 객실 등<br /> 7 - 8월 투숙 시 10% 할인</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://www.stayfolio.com/_next/image?url=https%3A%2F%2Fimages.stayfolio.com%2Fsystem%2Fpictures%2Fimages%2F000%2F272%2F164%2Foriginal%2Fa2a66efd70899f01035af4657181d78ef3e4a1a2.jpg%3F1749435911&w=1024&q=75'
        alt="First slide"
        fluid
        style={{ width: '100%', height: '500px', objectFit: 'cover', filter: "brightness(80%)" }}></Image>
        <Carousel.Caption
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          bottom: 'initial',
        }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>제주 애월읍 조용한 마을, <br />따스한 온기를 담은 스테이</h2>
          <p style={{ fontSize: '1.5rem' }}> 7 - 8월 투숙 시 10% 할인<br />10만원 대로 떠날 수 있어요!</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HeroBanner
