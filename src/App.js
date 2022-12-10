import { BrowserRouter, Routes, Route } from "react-router-dom";
import UncontrolledForm from "./Components/Forms/UncontrolledForm";
import ControlledForm from "./Components/Forms/ControlledForm";
import Home from "./Components/Home";
import Layout from "./Components/Layout/Layout";
import List from "./Components/List/List";
import UnModalParent from "./Components/UnControlledModal/UnModalParent";
import ModalParent from "./Components/ControlledModal/ModalParent";
import UnOnboardParent from "./Components/UnOnboard/UnOnboardParent";
import ConboardParent from "./Components/Conboard/ConboardParent";
import SimpleHOCParent from "./Components/HigherOrderComponents/Simple/SimpleHOCParent";
import ReadUserHOCParent from "./Components/HigherOrderComponents/ReadUser/ReadUserHOCParent";
import EditUserHOCParent from "./Components/HigherOrderComponents/EditUser/EditUserHOCParent";
import EditResourceHOCParent from "./Components/HigherOrderComponents/EditResource/EditResourceHOCParent";
import SimpleCH from "./Components/CustomHooks/Simple/SimpleCH";
import CustomHookforAPI from "./Components/CustomHooks/Resource/CustomHookforAPI";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/list" element={<List />} />
          <Route path="/unmodal" element={<UnModalParent />} />
          <Route path="/controlModal" element={<ModalParent />} />
          <Route path="/uform" element={<UncontrolledForm />} />
          <Route path="/cform" element={<ControlledForm />} />
          <Route path="/uonboard" element={<UnOnboardParent />} />
          <Route path="/conboard" element={<ConboardParent />} />
          <Route path="/simpleHOC" element={<SimpleHOCParent />} />
          <Route path="/readHOC" element={<ReadUserHOCParent />} />
          <Route path="/editHOC" element={<EditUserHOCParent />} />
          <Route path="/editResourceHOC" element={<EditResourceHOCParent />} />
          <Route path="/simpleCH" element={<SimpleCH />} />
          <Route path="/apiCH" element={<CustomHookforAPI />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
