import React, { useContext } from 'react';
import AppContext from 'Context/AppContext';
import { Product } from 'Components/Product';
import { Container, Items } from './Products.styled';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <Container>
      <Items>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </Items>
    </Container>
  );
};

export default Products;
