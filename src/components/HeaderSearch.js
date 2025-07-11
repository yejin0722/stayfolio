import React, { useState } from 'react';
import { Button, InputGroup, Form, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { X, Search, Calendar, People } from 'react-bootstrap-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import '../styles/headersearch.scss';

const regions = [
  '전체',
  '서울',
  '경기',
  '제주',
  '강원',
  '인천',
  '경상',
  '전라',
  '충청'
];

const HeaderSearch = ({ onClose }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(Date.now() + 86400000 * 1));
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(1);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) return;
    navigate(`/search?region=${encodeURIComponent(searchText)}`);
    if (onClose) onClose(); 
  };

  return (
    <div className="header-search-ui p-4" style={{ maxWidth: 800, margin: 'auto' }}>
      {/* 상단 헤더 */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="flex-grow-1 text-center mb-0 fw-bold">어디로 떠날까요?</h4>
        <Button variant="light" onClick={onClose}>
          <X />
        </Button>
      </div>

      {/* 검색 인풋 */}
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-4" style={{ borderRadius: '30px' }}>
          <InputGroup.Text id="search-icon" className="search-icon">
            <Search size={16} color="#999" />
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="떠나고 싶은 지역, 스테이를 찾아보세요."
            aria-label="검색어"
            aria-describedby="search-icon"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              borderTopRightRadius: '30px',
              borderBottomRightRadius: '30px',
              borderLeft: 'none',
              fontWeight: 'bold'
            }}
          />
        </InputGroup>
        {/* 일정 + 인원수 필터 */}
        <Row className="g-3 mb-4">
          {/* 일정 선택 */}
          <Col md={6}>
            <div className="filter-box d-flex align-items-center p-3 border rounded py-3" style={{ cursor: 'pointer' }}>
              <div>
                <div className="filter-label fw-bold my-2"><Calendar size={20} className="me-2" />일정</div>
                <DatePicker
                  locale={ko}
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(dates) => {
                    const [start, end] = dates;
                    setStartDate(start);
                    setEndDate(end);
                  }}
                  dateFormat="yyyy.MM.dd"
                  placeholderText="날짜 선택"
                  className="form-control"
                  withPortal
                  showPopperArrow={false}
                />
              </div>
            </div>
          </Col>
          {/* 인원 선택 */}
          <Col md={6}>
            <div className="filter-box d-flex align-items-center p-3 border rounded">
              <div>
                <div className="filter-label fw-bold"><People size={20} className="me-2" />인원</div>
                <div className="d-flex align-items-center">
                  <div className="me-3 mx-1">
                    <div className='mx-4'>성인</div>
                    <div className="d-flex align-items-center">
                      <Button variant="outline-secondary" size="sm" onClick={() => setAdultCount(Math.max(1, adultCount - 1))}>-</Button>
                      <span className="mx-2">{adultCount}</span>
                      <Button variant="outline-secondary" size="sm" onClick={() => setAdultCount(adultCount + 1)}>+</Button>
                    </div>
                  </div>
                  <div>
                    <div className='mx-3'>어린이</div>
                    <div className="d-flex align-items-center">
                      <Button variant="outline-secondary" size="sm" onClick={() => setChildCount(Math.max(0, childCount - 1))}>-</Button>
                      <span className="mx-2">{childCount}</span>
                      <Button variant="outline-secondary" size="sm" onClick={() => setChildCount(childCount + 1)}>+</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      <p
      style={{textAlign: "center"}}
      >국내</p>
      <div className="mb-3 d-flex flex-wrap gap-2">
          {regions.map((region) => (
            <Button
              key={region}
              variant={searchText === region ? 'dark' : 'outline-secondary'}
              size="sm"
              onClick={() => setSearchText(region)}
              style={{ 
              width: "30%",
              height: "40px",
              margin: "auto",
              borderRadius: '20px',
              padding: '0.25rem 1rem',
              fontWeight: '600',
              borderWidth: '2px',
              border: "1px solid #333",
              backgroundColor: searchText === region ? '#333' : 'transparent', 
              color: searchText === region ? '#fff' : '#6c757d',
              transition: 'background-color 0.3s, color 0.3s, border-color 0.3s', 
            }}
            >
              {region}
            </Button>
          ))}
      </div>
      <div style={{position: "relative"}}>
        <Image
        className='my-3'
        style={{width: "100%", borderRadius: "5px", filter: "brightness(70%)"}}
        src="https://image.codenbutter.com/upload/node/2025/3ea0f207-111b-4d0b-9421-ff3d8187bf26.jpg?f=jpg" alt="" />
          <Image
          style={{width: "30px", position: "absolute", top: "20px", right: "3px"}}
          src='https://www.stayfolio.com/web/images/ad.png'></Image>
          <h5
          style={{position: "absolute", color: "#fff", top: "53px", left: "20px", fontSize: "26px"}}
          >숙박권 받고 서촌에서 1박하기</h5>
          <p
          style={{position: "absolute", color: "#fff", top: "85px", left: "20px", fontSize: "20px"}}
          >작은 한옥들이 옹기종기 모인 정겨운마을, 서촌의 숙박권을 드려요</p>
      </div>
      {/* 검색버튼 */}
      <Button type="submit" className="w-100" style={{ borderRadius: '5px', fontWeight: 'bold', backgroundColor: '#333', color: "#fff" }}>
          검색
      </Button>
      </Form>
    </div>
  );
};

export default HeaderSearch;
