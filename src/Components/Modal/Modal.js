import ModalComponent from "./ModalComponent";
import LargeProductListItem from "../List/Products/LargeProductListItem";

function Modal() {
  const product = {
    id: "1234",
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  };
  return (
    <>
      <h5>Modal - Creating a simple Modal</h5>
      <p>
        <span style={{ fontWeight: "bold" }}>
          Display product item in modal:{" "}
        </span>
        {JSON.stringify(product)}
      </p>
      <ModalComponent>
        <LargeProductListItem product={product} />
      </ModalComponent>
    </>
  );
}

export default Modal;
