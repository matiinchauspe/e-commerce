import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from 'Context/AppContext';
import { elemSumTotal } from 'Utils/calcs';
import {
  Container,
  Content,
  ButtonContent,
  Title,
  Item,
  Element,
  Name,
  Price,
} from './Payment.styled';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();
  const total = elemSumTotal(cart);

  const paypalOptions = {
    clientId:
      'AafYpYM-ONXH5gtit-jm-XL72B28AU8leooimTgD-NgwwDdludXN6_5A0dLSIfgEFtSkZsuEFdkwtJM1',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log('success', data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('success');
    }
  };

  return (
    <Container>
      <Content>
        <Title>Resumen del pedido:</Title>
        {cart.map((item) => (
          <Item key={item.id}>
            <Element>
              <Name>{item.title}</Name>
              <Price>
                {'$ '}
                {item.price}
              </Price>
            </Element>
          </Item>
        ))}
        <ButtonContent>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={total}
            onApprove={(data, authId) => console.log('onApprove', data, authId)}
            onPaymentStart={() => console.log('onPaymentStart')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(msg) => console.log('payment error', msg)}
            onPaymentCancel={(data) => console.log(data)}
            onShippingChange={(data) => console.log('onShippingChange', data)}
          />
        </ButtonContent>
      </Content>
    </Container>
  );
};

export default Payment;
