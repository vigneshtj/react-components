import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  background: rgb(0 0 0 /0.5);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: auto;
`;

const ModalBody = styled.div`
  background: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

function UnControlledModal({ children }) {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Open Modal </button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody>
            <button onClick={() => setShouldShow(false)}>close </button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
}

export default UnControlledModal;
