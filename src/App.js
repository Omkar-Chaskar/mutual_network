import './App.css';
import { Header , Navbar } from "./Components";
import { Home , SeperationPage } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seperation" element={<SeperationPage />} />
          </Routes>
    </div>
  );
}

export default App;
