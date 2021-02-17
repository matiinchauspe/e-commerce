import styled from 'styled-components';

export const Container = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  margin: 0 0 4em 0;
`;

export const Content = styled.div``;

export const Head = styled.div``;

export const Title = styled.h2`
  margin: 0 0 8px 0;
  padding: 0;
`;

export const InformationForm = styled.div``;

export const Form = styled.form``;

export const Input = styled.input`
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  color: rgba(0, 0, 0, 0.75);
  display: inline-block;
  font-feature-settings: 'tnum';
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  list-style: none;
  margin: 0 0 8px 0;
  outline: 0;
  padding: 4px 12px;
  width: 100%;
  box-sizing: border-box;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0;
`;

export const Back = styled.div`
  margin: 10px 0 0 0;
`;

export const Next = styled.div``;

export const ItemButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

export const Sidebar = styled.div`
  margin: 10px 0 0 0;
`;

export const InformationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InformationElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;
`;

export const Name = styled.h4`
  margin: 0;
`;

export const ItemsTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
  padding: 0;
`;

export const Price = styled.span``;

export const InformationButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #bee2f9;
  background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
  background-color: #63b8ee;
  border-radius: 6px;
  border: 1px solid #3866a3;
  display: inline-block;
  cursor: pointer;
  color: #14396a;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #7cacde;
  width: 100%;
  display: block;
  outline: none;
`;
