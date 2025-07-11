import React from 'react'
import { Button, Container } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Border } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div>
      <div className='bg-info'>
        <Container className='footer-wrap'>
          <div className="footer-desc">
            <p><strong>고객 센터</strong> 평일 10:00 ~ 19:00 / 주말 및 공휴일 제외</p>
            <div className="footer-btns">
              <button>입점 문의</button>
              <button>제휴 문의</button>
              <button>B2B 구매</button>
              <button>1:1 문의</button>
            </div>
          </div>
          <div className="footer-icon">
            <img src="https://www.stayfolio.com/web/images/logo.svg" alt="logo" />
          </div>
        </Container>
        <Container className='about'>
          <p>ABOUT 4 POINT APPROACH NEWSLETTER CAREERS 이용약관 <strong>개인정보 처리방침</strong></p>
          <p>
            상호명 : (주) 스테이폴리오 대표자 : 장인성 주소 : 서울특별시 종로구 자하문로9길 24, 2층(통인동) 사업자등록번호 : 676-87-00055
            <br />
            통신판매업신고 : 제 2015 서울종로 0499호 관광사업자등록 : 일반여행업 2018-000049호(종로구청) 전화 : 1670-4123 전자우편 : help@stayfolio.com
          </p>
          <div className="about-wrap">
            <p>
              (주)스테이폴리오는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
              <br/>
              Copyright &copy; STAYFOLIO
            </p>
            <div className="sns-wrap">
              <i className="bi bi-facebook" style={{ color: '#1a1a1a', opacity: '0.5', fontSize: '16px', marginRight: '20px' }}></i>
              <i className="bi bi-instagram" style={{ color: '#1a1a1a', opacity: '0.5', fontSize: '16px', marginRight: '20px' }}></i>
              <i className="bi bi-youtube" style={{ color: '#1a1a1a', opacity: '0.5', fontSize: '16px', marginRight: '20px' }}></i>
            </div>
          </div>
        </Container>
      </div>
      <div className='top-btn'>
        <a href="#"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          height: "50px",
          width: "50px",
          textAlign: "center",
          lineHeight: "50px",
          borderRadius: "50%",
          background: "#333"
        }}
        >
          <i className="bi bi-chevron-up"
          style={{color: '#fff'}}
          ></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
