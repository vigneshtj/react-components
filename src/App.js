import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
