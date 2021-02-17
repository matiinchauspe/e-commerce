import React, { useContext } from 'react';
import useGoogleAddress from 'Hooks/useGoogleAddress';
import AppContext from 'Context/AppContext';
import { Map } from 'Components/Map';
import {
  Container,
  Content,
  Title,
  Info,
  MapContainer,
} from './Success.styled';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);

  return (
    <Container>
      <Content>
        <Title>Gracias por tu compra</Title>
        <Info>Tu pedido llegará en 3 dias a tu dirección</Info>
      </Content>
      <MapContainer>
        <Map location={location} />
      </MapContainer>
    </Container>
  );
};

export default Success;
