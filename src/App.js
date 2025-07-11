import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import StayDetailPage from './pages/StayDetailPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StayAllPage from './pages/StayAllPage';
import FindStay from './pages/FindStay';
import Promotion from './pages/Promotion';
import Journal from './pages/Journal';
import TravelDetail from './pages/TravelDetail';
import MagazineDetail from './pages/MagazineDetail';
import PreOrder from './pages/PreOrder';
import ScrollToTop from './components/ScrollToTop';
import PromotionDetailPage from './pages/PromotionDetailPage'; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay/:id" element={<StayDetailPage />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/StayAllPage" element={<StayAllPage />} />
          <Route path="/findStay" element={<FindStay />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/promotion/:id" element={<PromotionDetailPage />} />
          <Route path="/Journal" element={<Journal />} />
          <Route path="/journal/travel/:id" element={<TravelDetail />} />
          <Route path="/journal/magazine/:id" element={<MagazineDetail />} />
          <Route path="/PreOrder" element={<PreOrder />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
