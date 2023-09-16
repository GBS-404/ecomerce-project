import React, { useState, useEffect } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";

const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = "https://api.mercadolibre.com/sites/MLA/search?q=celular";
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchAPI();
  }, []);
  return (
    <div>
      <h1>Store</h1>
      <div>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4>{e.price}</h4>
            <button>
              {cart.some((itemCart) => itemCart.id === e.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
