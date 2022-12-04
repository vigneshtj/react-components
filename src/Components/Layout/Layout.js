import styled from "styled-components";
import SplitScreen from "./SplitScreen";

const Left = () => (
  <div style={{ background: "red", textAlign: "center" }}> Left</div>
);
const Right = () => (
  <div style={{ background: "green", textAlign: "center" }}>Right</div>
);

function Layout() {
  return (
    <>
      <ol>
        <li>
          <center>Split Screen</center>
          <SplitScreen leftWidth={1} rightWidth={3}>
            <Left />
            <Right />
          </SplitScreen>
        </li>
      </ol>
    </>
  );
}

export default Layout;
