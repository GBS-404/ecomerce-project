import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStoreFuncs";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProductsArea } from "../css/styles";
import { Transforma } from "../components/Transforma";
import { Header } from "../components/header";
import { Link } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState(getItem("carrinho") || []);
  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem("carrinho", arrFilter);
  };

  const subTotal = data.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div>
      <Header />
      <h1 className="hCart">Cart</h1>
      <h3 className="sTotal">SubTotal: R${Transforma(subTotal)}</h3>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title} />
            <h4>R${Transforma(e.price)}</h4>
            <button onClick={() => removeItem(e)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};

export default Cart;
