import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-[#eef5ff] flex items-center justify-center">
      <h1 className="heading-font text-6xl text-[#06213b]">{title}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client-portal" element={<PlaceholderPage title="Client Portal Coming Soon" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;