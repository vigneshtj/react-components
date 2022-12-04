import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <ol>
        <li>
          <Link to="/layout">Layout Component Pattern</Link>
          <span> deals with arranging other components in a page</span>
        </li>
        <li>
          <Link to="/list">List Pattern</Link>
          <span> deals with formatting list</span>
        </li>
      </ol>
    </>
  );
}

export default Home;
