import React, { useState, useEffect } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { getItem, setItem } from "../services/LocalStoreFuncs";
import { ProductsArea } from "../css/styles";
import { Header } from "../components/header";
import { Transforma } from "../components/Transforma";
const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem("carrinho") || []);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = "https://api.mercadolibre.com/sites/MLA/search?q=celular";
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchAPI();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter);
      setItem("carrinho", arrFilter);
    } else {
      setCart([...cart, obj]);
      setItem("carrinho", [...cart, obj]);
    }
  };

  return (
    <div>
      <Header />
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4> R${Transforma(e.price)}</h4>
            <button onClick={() => handleClick(e)}>
              {cart.some((itemCart) => itemCart.id === e.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};

export default Store;
