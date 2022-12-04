import styled from "styled-components";

import SmallPersonListItem from "./People/SmallPersonListItem";
import LargePersonListItem from "./People/LargePersonListItem";
import SmallProductListItem from "./Products/SmallProductListItem";
import LargeProductListItem from "./Products/LargeProductListItem";
import RegularList from "./RegularList";
import NumberedList from "./NumberedList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const Box = styled.div`
  border: 1px solid black;
  flex: 1;
  padding: 1rem;
`;

function List() {
  const people = [
    {
      id: "123",
      name: "John Doe",
      age: 54,
      hairColor: "brown",
      hobbies: ["swimming", "bicycling", "video games"],
    },
    {
      id: "234",
      name: "Brenda Smith",
      age: 33,
      hairColor: "black",
      hobbies: ["golf", "mathematics"],
    },
    {
      id: "345",
      name: "Jane Garcia",
      age: 27,
      hairColor: "blonde",
      hobbies: ["biology", "medicine", "gymnastics"],
    },
  ];

  const products = [
    {
      id: "1234",
      name: "Flat-Screen TV",
      price: "$300",
      description: "Huge LCD screen, a great deal",
      rating: 4.5,
    },
    {
      id: "2345",
      name: "Basketball",
      price: "$10",
      description: "Just like the pros use",
      rating: 3.8,
    },
    {
      id: "3456",
      name: "Running Shoes",
      price: "$120",
      description: "State-of-the-art technology for optimum running",
      rating: 4.2,
    },
  ];
  return (
    <>
      <p>List components - Formatting same list with different styles</p>
      <Wrapper>
        <Box>
          <h5>Small Person List</h5>
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={SmallPersonListItem}
          />
        </Box>
        <Box>
          <h5>Large Person List</h5>
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={LargePersonListItem}
          />
        </Box>
        <Box>
          <h5>Small Product List</h5>
          <NumberedList
            items={products}
            resourceName="product"
            itemComponent={SmallProductListItem}
          />
        </Box>
        <Box>
          <h5>Large Product List</h5>
          <NumberedList
            items={products}
            resourceName="product"
            itemComponent={LargeProductListItem}
          />
        </Box>
      </Wrapper>
    </>
  );
}

export default List;
