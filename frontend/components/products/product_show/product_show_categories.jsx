import React from 'react';

const ProductCategories = ({categories}) => {
  return <ul className="product-categories">
        <h1>Categories: </h1>

        {categories.map(cat => {
          return <li>{cat.category_name}</li>;
        })}
        
    </ul>;
};

export default ProductCategories;