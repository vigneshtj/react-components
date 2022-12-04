function SmallProductListItem({ product }) {
  const { name, price } = product;

  return (
    <p>
      Name: {name} Price: £{price} Only
    </p>
  );
}

export default SmallProductListItem;
