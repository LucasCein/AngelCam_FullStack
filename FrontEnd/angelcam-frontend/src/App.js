
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Cameras from './components/Cameras';
import CameraDetail from './components/DetailCamera/CameraDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cameras" element={<Cameras />} />
        <Route path="/camera-detail" element={<CameraDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
