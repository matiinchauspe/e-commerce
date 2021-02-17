import React from 'react';
import { Container } from './Layout.styled';
import { Header } from '../Header';
import { Footer } from '../Footer';

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
