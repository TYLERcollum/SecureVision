// Main App component for SecureVision
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import PaywallScreen from './screens/PaywallScreen';
import HomeScreen from './screens/HomeScreen';
import DrawingScreen from './screens/DrawingScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/paywall" element={<PaywallScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/drawing" element={<DrawingScreen />} />
      </Routes>
    </Router>
  );
}
