
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Cameras from './components/Cameras';
import CamerasDetail from './components/CameraDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cameras" element={<Cameras />} />
        <Route path="/camera-detail" element={<CamerasDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
