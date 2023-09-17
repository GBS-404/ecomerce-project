import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const HeaderArea = styled.div`
  display: flex;
  gap: 50px;
  background-color: #aceaf5;
  padding: 20px;
  margin-bottom: 70px;
  width: auto;
  border-radius: 20px;
  justify-content: center;
  width: 40%;
  align-items: center;
  margin-left: 27%;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 20%;
    color: #000000;
    border-bottom: 1px solid transparent;
    transition: font-size 0.3s, border-bottom 0.3s;

    &:hover {
      font-size: 18px;
      border-bottom: 1px solid #3e1ff0;
    }
  }
`;
export const Header = () => {
  return (
    <HeaderArea>
      <Link to="/">Store</Link>
      <Link to="/cart">Cart</Link>
    </HeaderArea>
  );
};
