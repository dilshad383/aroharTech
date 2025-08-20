import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Career from './pages/Career.jsx';
import Pricing from './pages/Pricing.jsx';
import Contact from './pages/Contact.jsx';
function App() {


  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/career" element={<Career />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    <Footer />
  </>
  )
}

export default App
