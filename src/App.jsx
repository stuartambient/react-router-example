import { Outlet, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <h1>Main Nav</h1>
      <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to='/products'>Products</Link>
        <Link to='/solutions'>Solutions</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/company'>Company</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
