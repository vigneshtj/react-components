import { useCallback } from "react";
import useDataSource from "./useDataSource";

function ProductInfo({ productId }) {
  const localStorageCall = useCallback(
    (productId) => async () => {
      const data = localStorage.getItem(`${productId}`);
      return JSON.parse(data);
    },
    [productId]
  );

  const product = useDataSource(localStorageCall(productId));

  const { name, price, description, rating } = product || {};

  return product ? (
    <>
      <h3>{name}</h3>
      <p>price: £ {price} only</p>
      <p>Description: {description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : (
    <p>loading...</p>
  );
}

export default ProductInfo;
