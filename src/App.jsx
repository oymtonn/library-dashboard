import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import BookDetail from './components/BookDetail';
import Sidebar from './components/Sidebar';
import './App.css'; // make sure this includes .app-layout styles

const App = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="routes-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/book/:bookKey" element={<BookDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
