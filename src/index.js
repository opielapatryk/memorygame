import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./pages/Play";
import ChooseLvl from "./pages/ChooseLvl";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/play" element={<Play />} />
        <Route path="/chooselvl" element={<ChooseLvl />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);