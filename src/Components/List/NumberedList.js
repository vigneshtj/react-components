function NumberedList({ items, resourceName, itemComponent: ItemComponent }) {
  return (
    <>
      {items.map((item, i) => {
        return (
          <>
            <span>{i + 1}</span>
            <ItemComponent key={i} {...{ [resourceName]: item }} />
          </>
        );
      })}
    </>
  );
}

export default NumberedList;
