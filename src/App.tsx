import Emergency from './components/Emergency';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="emergency" element={<Emergency />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
