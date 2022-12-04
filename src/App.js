import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h6>test</h6>} />
          <Route path="/users" element={<h6>user</h6>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
