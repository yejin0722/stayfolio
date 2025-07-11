import '../styles/header.scss';
import React, { useState } from 'react';
import { Container, Navbar, Nav, Form, InputGroup, Button, Modal, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import HeaderSearch from './HeaderSearch';


function Header() {
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleSearchOpen = () => setShowSearchModal(true);
  const handleSearchClose = () => setShowSearchModal(false);

  let [searchText, setSearchText] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchText.trim())}`);
    }
  };

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginOpen = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const [show, setShow] = useState(false);
  return (
    <header
    style={{position:'sticky', top: '0', zIndex: '1000'}}
    >
      <Navbar
      style={{background: '#fff'}}
      expand="lg" className="py-3">
        <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand as={Link} to="/">
        <img src="https://www.stayfolio.com/web/images/logo.svg" alt="logo" />
        </Navbar.Brand>
        <Form className="d-none d-lg-flex mx-3" onSubmit={handleSubmit} style={{ width: '350px' }}>
        <InputGroup style={{ borderRadius: '30px' }}>
          <InputGroup.Text
            id="search-icon"
            className="search-icon"
          >
          <Search size={16} color="#999" />
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="어디로 떠날까요?"
            aria-label="검색어"
            aria-describedby="search-icon"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onClick={handleSearchOpen}
            style={{
              borderTopRightRadius: '30px',
              borderBottomRightRadius: '30px',
              borderLeft: 'none',
              fontWeight: 'bold'
            }}
          />
        </InputGroup>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav
              style={{fontWeight: 'bold',}}
              className="navbar"
            >
              <Nav.Link as={Link} to="/FindStay">FIND STAY</Nav.Link>
              <Nav.Link as={Link} to="/Promotion">PROMOTION</Nav.Link>
              <Nav.Link as={Link} to="/Journal">JOURNAL</Nav.Link>
              <Nav.Link as={Link} to="/PreOrder">PRE-ORDER</Nav.Link>
            </Nav>
            <button
            variant="outline-dark"
            className="ms-3 navbar"
            onClick={handleLoginOpen}
            style={{
              fontWeight: 'bold',
              color: "#777",
              border: "none",
              background: "transparent"
            }}
            >
              <i className="bi bi-box-arrow-in-left"></i> LOGIN
            </button>
            <Modal show={showLogin} onHide={handleLoginClose} centered>
            <Container
            className='py-5 px-5'
            >
              <h2
              style={{textAlign: "center", marginBottom: "20px", fontWeight: "bold", color: "#353535"}}
              >LOGIN</h2>
              <Form.Group controlId="formBasicId">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type="text"
                placeholder="아이디를 입력하세요"
                aria-describedby="idHelpBlock"
                style={{padding: "15px 15px", marginBottom: "15px"}}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력하세요"
                aria-describedby="passwordHelpBlock"
                style={{padding: "15px 15px"}}
              />
              <Button
              type="submit"
              style={{ backgroundColor: '#333', color: '#fff', border: 'none', width: "100%", marginTop: "20px", padding: "15px 0", fontSize: "16px", fontWeight: "bold" }}
              >로그인</Button>
            </Form.Group>
            <Button
            style={{ backgroundColor: '#FEE500', color: '#3C1E1E', border: 'none', width: "100%", marginTop: "40px", padding: "15px 0", fontSize: "16px", fontWeight: "bold" }}
            ><img
            style={{width: "18px"}}
            src="https://www.stayfolio.com/web/images/sns-logo/kakao.svg" alt="kakaologo" /> 카카오로 3초만에 시작하기</Button>
            <p
            style={{textAlign: "center", marginTop: "20px"}}
            >또는</p>
            <div className='login-btn-wrap'>
              <a href="#none"><img src="https://www.stayfolio.com/web/images/sns-logo/auth/sns_naver.svg" alt="" /></a>
              <a href="#none"><img src="https://www.stayfolio.com/web/images/sns-logo/auth/sns_facebook.svg" alt="" /></a>
              <a href="#none"><img src="https://www.stayfolio.com/web/images/sns-logo/auth/sns_apple.svg" alt="" /></a>
              <a href="#none"><img src="https://www.stayfolio.com/web/images/sns-logo/auth/sns_google.svg" alt="" /></a>
            </div>
            <p
            style={{textAlign: "center", marginTop: "20px", color: "#999"}}
            >이메일 로그인　·　신규 회원가입</p>
            </Container>
            </Modal>
            <Dropdown
            show={show}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
          <Dropdown.Toggle variant="link" id="dropdown-basic" style={{ color: '#777', textDecoration:"none" }}>
            <i className="bi bi-globe"></i> KO
          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#none" style={{ color: '#777'}}>한국어</Dropdown.Item>
              <Dropdown.Item href="#none" style={{ color: '#777'}}>ENGLISH</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showSearchModal} onHide={handleSearchClose} centered size="lg">
      <HeaderSearch onClose={handleSearchClose} />
      </Modal>
    </header>
  );
}

export default Header;
