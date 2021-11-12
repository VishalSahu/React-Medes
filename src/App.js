import "./App.css";
import Nav from "./Components/Nav";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <div className="content">
            <Routes>
              <Route path="/"><Home></Home></Route>
              <Route path="/about"></Route>
              <Route path="/contact"></Route>

            </Routes>
          </div>
        </Nav>
      </div>
    </Router>
  );
}

export default App;
