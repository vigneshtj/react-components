import styled from "styled-components";

const ModalBackground = styled.div`
  background: rgb(0 0 0 /0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: auto;
`;
const ModalBody = styled.div`
  background: white;
  margin: 10% auto;
  width: 50%;
  padding: 20px;
`;

function ControlledModal(props) {
  const { shouldShow, onRequestClose, children } = props;
  console.log(props);
  return (
    <>
      {shouldShow && (
        <ModalBackground onClick={onRequestClose}>
          <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
        </ModalBackground>
      )}
    </>
  );
}

export default ControlledModal;
