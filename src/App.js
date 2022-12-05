import { BrowserRouter, Routes, Route } from "react-router-dom";
import UncontrolledForm from "./Components/Forms/UncontrolledForm";
import ControlledForm from "./Components/Forms/ControlledForm";
import Home from "./Components/Home";
import Layout from "./Components/Layout/Layout";
import List from "./Components/List/List";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/list" element={<List />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/uform" element={<UncontrolledForm />} />
          <Route path="/cform" element={<ControlledForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
