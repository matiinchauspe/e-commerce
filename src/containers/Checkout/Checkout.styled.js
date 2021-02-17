import styled from 'styled-components';

export const Container = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  padding: 0 0 4em 0;
`;

export const Content = styled.div``;

export const Title = styled.h3``;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0 0;
`;

export const Element = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;
`;

export const ElementName = styled.h4`
  margin: 0;
`;

export const ElementPrice = styled.span``;

export const ContentButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  i {
    margin: 0 0 0 10px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const Sidebar = styled.div``;

export const SidebarButton = styled.button`
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
