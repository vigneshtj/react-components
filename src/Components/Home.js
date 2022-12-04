import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <ol>
        <li>
          <Link to="/layout">Layout Component Pattern</Link>
          <span> deals with arranging other components in a page</span>
        </li>
      </ol>
    </>
  );
}

export default Home;
