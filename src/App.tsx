import PatientLogin from './components/PatientLogin';
import Emergency from './components/Emergency';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorLogin from './components/DoctorLogin';
import PatientRegister from './components/PatientRegister';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="emergency" element={<Emergency />} />
        <Route path="doctorLogin" element={<DoctorLogin />} />
        <Route path="patientLogin" element={<PatientLogin />} />
        <Route path="patientLogin/patientRegister" element={<PatientRegister />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
