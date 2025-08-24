import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Internships from "./pages/Internships";

function App() {
  return (
    <Router>
      {/* الناف بار ثابت فوق كل الصفحات */}
      <Navbar />

      {/* الصفحات */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
      </Routes>
    </Router>
  );
}

export default App;
