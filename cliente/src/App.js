
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import Details from "./Detail"

function App() {

  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/:id" element={<Details />} />
      </Routes>

    </div>
  );
}

export default App;
