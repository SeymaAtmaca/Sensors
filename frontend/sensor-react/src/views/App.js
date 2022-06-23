import Navbar from "./../components/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AddSensor from "./AddSensor";
import AddMap from "./AddMap";
import SensorSummary from "./SensorSummary";
import SensorDetay  from "./sensorDetay";
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <br />
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sensors" element={<SensorSummary />} />
            <Route path="/new" element={<AddSensor />} />
            <Route path="/newMap" element={<AddMap />} />
            <Route path="/sensors/logs" element={<SensorDetay />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
