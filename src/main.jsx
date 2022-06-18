import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Company from './routes/company';
import Pricing from './routes/pricing';
import Products from './routes/products';
import Solutions from './routes/solutions';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='Products' element={<Products />} />
          <Route path='Solutions' element={<Solutions />} />
          <Route path='Pricing' element={<Pricing />} />
          <Route path='Company' element={<Company />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

{
  /* <nav>
  <ul>
    <li>Products
    <ul>
      <li>Payments</li>
      <li>Ledgers</li>
      <li>Accounts</li>
      <li>Compliance</li>
    </ul>
    </li>
    
    <li>Solutions
    <ul>
      <li>Solution A</li>
      <li>Solution B</li>
    </ul>
    </li>
    <li>Pricing</li>
    <li>Company
    <ul>
      <li>About</li>
      <li>Contact</li>
      <li>Careers</li>
      <li>Security</li>
    </ul>
    </li>
  </ul>
</nav> */
}
