import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from 'Context/AppContext';
import {
  Container,
  Content,
  Head,
  Title,
  InformationForm,
  Form,
  Input,
  Buttons,
  Next,
  Back,
  // ItemButton,
  InformationButton,
  Sidebar,
  InformationItem,
  InformationElement,
  ItemsTitle,
  Name,
  Price,
} from './Information.styled';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <Container>
      <Content>
        <Head>
          <Title>Información de contacto:</Title>
        </Head>
        <InformationForm>
          <Form ref={form}>
            <Input type="text" placeholder="Nombre completo" name="name" />
            <Input type="text" placeholder="Correo electrónico" name="email" />
            <Input type="text" placeholder="Dirección" name="address" />
            <Input type="text" placeholder="apto" name="apto" />
            <Input type="text" placeholder="Ciudad" name="city" />
            <Input type="text" placeholder="País" name="country" />
            <Input type="text" placeholder="Estado" name="state" />
            <Input type="text" placeholder="Código postal" name="cp" />
            <Input type="text" placeholder="Teléfono" name="phone" />
          </Form>
        </InformationForm>
        <Buttons>
          <Back>
            <Link to="/checkout">Regresar</Link>
          </Back>
          <Next>
            <InformationButton type="button" onClick={handleSubmit}>
              Pagar
            </InformationButton>
          </Next>
        </Buttons>
      </Content>
      <Sidebar>
        <ItemsTitle>Pedido:</ItemsTitle>
        {cart.map((item) => (
          <InformationItem key={item.title}>
            <InformationElement>
              <Name>{item.title}</Name>
              <Price>{item.price}</Price>
            </InformationElement>
          </InformationItem>
        ))}
      </Sidebar>
    </Container>
  );
};

export default Information;
