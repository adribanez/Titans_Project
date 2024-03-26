import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import About from "./pages/About";
import Main from "./pages/Main";
import Titanes from "./pages/Titanes";
import Contacto from "./pages/Contacto";
import Informacion from "./pages/Informacion";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/titanes" element={<Titanes />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/informacion" element={<Informacion />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
