import { Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './components/Dashboard';
import BookDetail from './components/BookDetail';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/book/:bookKey" element={<BookDetail />} />
      </Routes>
    </div>
  );
};

export default App;
