function LargeProductListItem({ product }) {
  const { name, price, description, rating } = product;

  return (
    <>
      <h3>{name}</h3>
      <p>price: £ {price} only</p>
      <p>Description: {description}</p>
      <p>Average Rating: {rating}</p>
    </>
  );
}

export default LargeProductListItem;
