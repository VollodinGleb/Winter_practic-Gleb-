import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="winter-practic/" element={<Home />} />
          <Route path="winter-practic/portfolio/" element={<Portfolio />} />
          <Route path="winter-practic/contactUS/" element={<ContactUs />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
