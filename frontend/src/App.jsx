import { Routes, Route, Link } from 'react-router-dom';
import OrgDashboard from './pages/OrgDashboard';
import AddAsset from './components/AddAsset';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OrgDashboard />} />
      <Route path="/add-asset" element={<AddAsset />} />
    </Routes>
  );
}
export default App;