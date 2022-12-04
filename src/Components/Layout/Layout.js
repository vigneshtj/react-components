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
      Layout pattern - splitting screen into two
      <SplitScreen leftWidth={1} rightWidth={3}>
        <Left />
        <Right />
      </SplitScreen>
    </>
  );
}

export default Layout;
