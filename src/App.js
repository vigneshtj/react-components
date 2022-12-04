import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout/Layout";
import List from "./Components/List/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
