import React, { useState } from 'react';
import { Container, Badge, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { X, Search, Calendar, People } from 'react-bootstrap-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

import {
  dummyStays1, dummyStays2, dummyStays3,
  dummyStays4, dummyStays5, dummyStays6,
  dummyStays7, dummyStays8, dummyStays9,
  dummyStays10, dummyStays11
} from '../data/DummyData';

const allStays = [
  ...dummyStays1, ...dummyStays2, ...dummyStays3,
  ...dummyStays4, ...dummyStays5, ...dummyStays6,
  ...dummyStays7, ...dummyStays8, ...dummyStays9,
  ...dummyStays10, ...dummyStays11
];

const StayDetailPage = () => {
  const { id } = useParams(); 
  const stayId = parseInt(id);
  const stay = allStays.find((stay) => stay.id === stayId);
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(Date.now() + 86400000));

  return (
    <div>
      <Container style={{ maxWidth: '100%' }}>
        <img
          src={stay.detailThumbImg}
          alt={stay.title}
          style={{
            width: '100%',
            objectFit: 'cover',
            height: '600px',
            marginBottom: '20px'
          }}
        />
      </Container>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '30px' }}>
        {/* 숙소소개 */}
        <div className='staydetaildesc' style={{ flex: 3 }}>
          <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>{stay.title}</h3>
          <p>{stay.location}</p>
          <p>{stay.desc}</p>
          <p><i className="bi bi-bookmarks-fill"></i> {stay.scrap}</p>

          <Badge bg="" className='staysale' style={{
            backgroundColor: "#f3faff",
            width: "100%",
            color: "#015c96",
            textAlign: "left",
            padding: "20px",
            fontSize: "16px",
            fontWeight: "100",
            flexWrap: "wrap"
          }}>
            <strong style={{ fontSize: "18px", fontWeight: "bold" }}>
              마감임박할인 <i className="bi bi-clock"></i>
            </strong>
            임박한 날짜에 체크인 시 최대 20% 할인을 받을 수 있어요.
          </Badge>

          <hr />
          <div style={{ padding: "10px 0" }}>
            <span>편의시설</span>
            <span style={{ marginLeft: "20px" }}><i className="bi bi-tv"></i> TV / 빔프로젝터</span>
          </div>
          <hr />
          <div style={{ height: "70px", padding: "10px 0" }}>
            <span>프로모션 </span>
            <span style={{ marginLeft: "20px" }}>
              [5.29 ~ 7.17] 7월 투숙 시 최대 10% 할인 (특정일 제외)
            </span>
          </div>
          <hr />
          {/* 스테이 소개 */}
          <h5 style={{
            fontWeight: "bold",
            marginBottom: "40px",
            paddingBottom: "10px",
            borderBottom: "1px solid #777"
          }}>
            스테이 소개
          </h5>
          <h3 style={{ fontWeight: "bold", marginBottom: "30px" }}>{stay.subtitle}</h3>
          <img src={stay.detailImg1} alt={stay.title} style={{ width: '100%', borderRadius: "5px" }} />
          <p className='py-4' style={{ color: "#595959" }}>{stay.detailDesc1}</p>
          <img src={stay.detailImg2} alt={stay.title} style={{ width: '100%', borderRadius: "5px" }} />
          <p className='py-4' style={{ color: "#595959" }}>{stay.detailDesc2}</p>
          {/* 주요특징 */}
          <div className='option'>
          <h3 style={{ fontWeight: "bold", marginBottom: "30px" }}>주요 특징</h3>
          <div>
            <div style={{display: "flex", gap: "20px"}}>
              <img style={{width: "250px", height: "250px", objectFit: "cover", borderRadius: "5px" }} src={stay.detailImg3} alt="" />
              <img style={{width: "250px", height: "250px", objectFit: "cover", borderRadius: "5px" }} src={stay.detailImg4} alt="" />
            </div>
            <h4 style={{marginTop: "20px", fontSize: "18px", color: "#595959"}}>{stay.detailfeaturetit1}</h4>
            <p style={{color: "#595959"}}>{stay.detailfeature1}</p>
            <div style={{display: "flex", gap: "20px"}}>
              <img style={{width: "250px", height: "250px", objectFit: "cover", borderRadius: "5px" }} src={stay.detailImg5} alt="" />
              <img style={{width: "250px", height: "250px", objectFit: "cover", borderRadius: "5px" }} src={stay.detailImg6} alt="" />
              <img style={{width: "250px", height: "250px", objectFit: "cover", borderRadius: "5px" }} src={stay.detailImg7} alt="" />
            </div>
            <h4 style={{marginTop: "20px", fontSize: "18px", color: "#595959"}}>{stay.detailfeaturetit2}</h4>
            <p style={{color: "#595959"}}>{stay.detailfeature2}</p>
          </div>
            <div style={{display: "flex", gap: "20px"}}>
              <img style={{width: "250px", height: "250px", objectFit: "cover", borderRadius: "5px" }} src={stay.detailImg8} alt="" />
              <img style={{width: "250px", height: "250px", objectFit: "cover", borderRadius: "5px" }} src={stay.detailImg9} alt="" />
            </div>
            <h4 style={{marginTop: "20px", fontSize: "18px", color: "#595959"}}>{stay.detailfeaturetit3}</h4>
            <p style={{color: "#595959"}}>{stay.detailfeature3}</p>
          </div>
        </div>
        {/* 예약하기 */}
        <div className='datailreserved' style={{
          flex: 1,
          border: '1px solid #ddd',
          padding: '20px',
          position: 'sticky',
          top: '100px',
          height: 'fit-content',
          backgroundColor: '#fff'
        }}>
          <div style={{ marginBottom: '10px' }}>
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
          </div>
          <div style={{display: "flex", marginTop: "10px"}}>
            <div style={{flex: "1"}}>
              <img src={stay.detailImg2} alt={stay.title} style={{width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px", marginLeft: "2px"}} />
            </div>
            <div style={{flex: "3", fontSize: "14px", color: "#777", marginLeft: "20px"}}>
              <h5 style={{fontSize: "17px", color: "#333", marginTop: "2px"}}>{stay.title}</h5>
              <p style={{marginTop: "-3px"}}>기준인원 : {stay.person}</p>
              <s style={{marginTop: '-15px', display: "block"}}>{stay.sale}</s>
              <span style={{color: "#0199f8", marginRight: "5px"}}>{stay.rate}</span>
              <span style={{fontWeight: 'bold', color: '#333'}}
                >₩{`${stay.price.toLocaleString()}~`}</span>
            </div>
          </div>
          <div style={{backgroundColor: "#fafafa", borderRadius: "5px", padding: "20px", margin: "20px 0"}}>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "-20px", color: "#767676"}}>
              <p>객실 요금</p>
              <p>₩{`${stay.price.toLocaleString()}~`} * 1 박</p>
            </div>
            <hr/>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "-20px"}}>
              <p>총액</p>
              <p>₩{`${stay.price.toLocaleString()}~`}</p>
            </div>
          </div>
          <Button style={{ width: '100%', backgroundColor: "#333", color: "#fff", padding: "10px 0", marginTop: "0" }}>예약하기</Button>
        </div>
      </Container>
    </div>
  );
};

export default StayDetailPage;
