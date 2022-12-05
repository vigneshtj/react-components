import { useState } from "react";
import ControlledModal from "./ControlledModal";

function ModalParent() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => {
          setShouldShowModal(false);
        }}
      >
        <h1>Hello!</h1>
      </ControlledModal>
    </>
  );
}

export default ModalParent;
