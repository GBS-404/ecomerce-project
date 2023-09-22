import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productUrl = `https://api.mercadolibre.com/items/${id}`;
        const response = await fetch(productUrl);
        if (!response.ok) {
          throw new Error("Erro ao buscar o produto");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="pPage">
      {product && (
        <>
          <div className="info description">
            <h3>Descrição:</h3>
            <p>{product.title}</p>
          </div>
          <div className="info price">
            <h3>Preço:</h3>
            <p>{product.price}</p>
          </div>
          {/* Adicione mais informações do produto conforme necessário */}
        </>
      )}
    </div>
  );
};
