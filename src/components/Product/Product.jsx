import React from 'react';
import {
  Container,
  Info,
  InfoTitle,
  Price,
  Description,
  Image,
  Button,
} from './Product.styled';

const Product = ({ product, handleAddToCart }) => (
  <Container>
    <Image src={product.image} alt={product.title} />
    <Info>
      <InfoTitle>
        {product.title}
        <Price>
          {'$ '}
          {product.price}
        </Price>
      </InfoTitle>
      <Description>{product.description}</Description>
    </Info>
    <Button type="button" onClick={handleAddToCart(product)}>
      Comprar
    </Button>
  </Container>
);

export default Product;
