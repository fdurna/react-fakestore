import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Layout from "./components/Layout";
// pages
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout children={<Main />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
