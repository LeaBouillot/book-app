import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import EditBook from "./pages/EditBook";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
}

export default App
