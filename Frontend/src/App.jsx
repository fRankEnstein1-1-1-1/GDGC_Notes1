import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PreviousPage from "./pages/PreviousPage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/previous" element={<PreviousPage/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
