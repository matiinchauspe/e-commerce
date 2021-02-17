import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from 'Context/AppContext';
import {
  Container,
  HeaderTitle,
  HeaderCheckout,
  HeaderAlert,
} from './Header.styled';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <Container>
      <HeaderTitle>
        <Link to="/">PlatziConf Merch</Link>
      </HeaderTitle>
      <HeaderCheckout>
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {!!cart.length && <HeaderAlert>{cart.length}</HeaderAlert>}
      </HeaderCheckout>
    </Container>
  );
};

export default Header;
