import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Background from "./components/Background";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/:word/:usercolor/:userbackgroundColor"
            element={<Background />}
          />
          <Route path="/:word" element={<Background />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
