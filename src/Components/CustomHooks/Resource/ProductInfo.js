import useResource from "./useResource";

function ProductInfo({ productId }) {
  const product = useResource(`/products/${productId}`);
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
