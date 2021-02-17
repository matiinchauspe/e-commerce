import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from 'Context/AppContext';
import { elemSumTotal } from 'Utils/calcs';
import {
  Container,
  Content,
  Title,
  Item,
  Element,
  ElementName,
  ElementPrice,
  ContentButton,
  Sidebar,
  SidebarButton,
} from './Checkout.styled';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  return (
    <Container>
      <Content>
        <Title>{cart.length ? 'Lista de Pedidos:' : 'Sin Pedidos'}</Title>
        {cart.map((item) => (
          <Item key={item.id}>
            <Element>
              <ElementName>{item.title}</ElementName>
              <ElementPrice>
                {'$'}
                {item.price}
              </ElementPrice>
            </Element>
            <ContentButton type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </ContentButton>
          </Item>
        ))}
      </Content>
      {!!cart.length && (
        <Sidebar>
          <Title>{`Precio Total: $ ${elemSumTotal(cart)}`}</Title>
          <Link to="/checkout/information">
            <SidebarButton type="button">Continuar pedido</SidebarButton>
          </Link>
        </Sidebar>
      )}
    </Container>
  );
};

export default Checkout;
