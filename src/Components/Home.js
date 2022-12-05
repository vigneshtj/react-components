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
        <li>
          <Link to="/modal">Modal Pattern</Link>
          <span> creating a simple modal</span>
        </li>
        <li>
          <Link to="/uform">Uncontrolled Form Pattern</Link>
          <span> validation can be only after submit</span>
        </li>
        <li>
          <Link to="/cform">Controlled Form Pattern</Link>
          <span> validation can be only while filling the form</span>
        </li>
      </ol>
    </>
  );
}

export default Home;
