import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Library</h2>
    <nav>
      <Link to="/">Dashboard</Link>
    </nav>
  </div>
);

export default Sidebar;
