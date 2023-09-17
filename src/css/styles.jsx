import styled from "styled-components";

export const ProductsArea = styled.div`
  display: flex;
  gap: 56px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 30px;

  div {
    height: 320px;
    width: 230px;
    border: 0.5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 30px;
    background: #ffffff;
    box-shadow: 15px 15px 45px #bebebe, -10px -10px 5px #ffffff;

    button {
      background-color: #ceedf7;
      color: #2d0af7;
      border-radius: 10em;
      font-size: 17px;
      font-weight: 600;
      padding: 1em 2em;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      border: 1px solid black;
      box-shadow: 0 0 0 0 black;
    }

    button:hover {
      transform: translateY(-4px) translateX(-2px);
      box-shadow: 2px 5px 0 0 black;
    }

    button:active {
      transform: translateY(2px) translateX(1px);
      box-shadow: 0 0 0 0 black;
    }
  }
`;
