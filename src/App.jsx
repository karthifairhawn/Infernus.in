import React from 'react';
import ProductList from './components/ProductList';
import { subdomains } from './data/subdomains';
import './styles/theme.css';
import './styles/layout.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Infernus.in</h1>
        <p>managed by karthi, reach me at <u>karthifairhawn@gmail.com</u></p>
      </header>
      <main>
        <ProductList products={subdomains} />
      </main>
    </div>
  );
}

export default App;