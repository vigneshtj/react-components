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
          <Link to="/unmodal">Uncontrolled Modal Pattern</Link>
          <span> Uncontrolled modal - State is maintained by modal itself</span>
        </li>
        <li>
          <Link to="/controlModal">Controlled Modal Pattern</Link>
          <span> State is maintained by its parent</span>
        </li>
        <li>
          <Link to="/uform">Uncontrolled Form Pattern</Link>
          <span> validation can be only after submit</span>
        </li>
        <li>
          <Link to="/cform">Controlled Form Pattern</Link>
          <span> validation can be only while filling the form</span>
        </li>
        <li>
          <Link to="/uonboard">Un Controlled Onboarding Flow Pattern</Link>
          <span> Uncontrolled Onboarding flow</span>
        </li>
        <li>
          <Link to="/conboard">Controlled Onboarding Flow Pattern</Link>
          <span> Controlled Onboarding flow</span>
        </li>
        <li>
          <Link to="/simpleHOC">Simple HOC Pattern</Link>
          <span>
            {" "}
            A HOC is a component that returns a component whereas regular
            components returns JSX
          </span>
        </li>
        <li>
          <Link to="/readHOC">HOC to read data Pattern</Link>
          <span> A working example to read data</span>
        </li>
        <li>
          <Link to="/editHOC">HOC to edit data Pattern</Link>
          <span> A working example to edit data</span>
        </li>
        <li>
          <Link to="/editResourceHOC">HOC with generic API call Pattern</Link>
          <span> Generic API fetching HOC</span>
        </li>
        <li>
          <Link to="/SimpleCH">Simple custom hook Pattern</Link>
          <span> A Simple Example for custom hook</span>
        </li>
        <li>
          <Link to="/apiCH">Custom Hook for API Pattern</Link>
          <span>
            {" "}
            An Example for reusing code for API calls with custom hook
          </span>
        </li>
        <li>
          <Link to="/dsCH">custom hook for different datasources Pattern</Link>
          <span>
            {" "}
            A custom hook example for different Data source operations
          </span>
        </li>
        <li>
          <Link to="/recursive">
            Functional Programming - Recursive Pattern
          </Link>
          <span> Recursive function example</span>
        </li>
        <li>
          <Link to="/composition">
            Functional Programming - Composition Pattern
          </Link>
          <span> Composition example</span>
        </li>
        <li>
          <Link to="/partial">
            Functional Programming - Partially Apply Pattern
          </Link>
          <span> Partially Apply with HOC example</span>
        </li>
      </ol>
    </>
  );
}

export default Home;
