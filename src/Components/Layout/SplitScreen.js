import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: ${(props) => props.width};
`;

function SplitScreen(props) {
  const [Left, Right] = props.children;
  const { leftWidth, rightWidth } = props;
  return (
    <Container>
      <Pane width={leftWidth}>{Left}</Pane>
      <Pane width={rightWidth}>{Right}</Pane>
    </Container>
  );
}

export default SplitScreen;
