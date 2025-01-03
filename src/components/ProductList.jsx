import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <div className="product-list d-flex">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          subdomain={product.subdomain}
          description={product.description}
          url={product.url}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;