import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItems from "./pages/AddItems";
import ViewItems from "./pages/ViewItems";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewItems />} />
        <Route path="/add" element={<AddItems />} />
      </Routes>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
