import React from "react";
import { Routes, Route } from "react-router-dom";
import DeleteBooks from "./pages/DeleteBooks";
import CreateBooks from "./pages/CreateBooks";
import Home from "./pages/Home";
import EditBooks from "./pages/EditBooks";
import ShowBooks from "./pages/ShowBooks";

const App = () => {
  return (
    <Routes>
      <Route path="/books/create" element={<CreateBooks />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBooks />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/books/edit/:id" element={<EditBooks />}></Route>
      <Route path="/books/details/:id" element={<ShowBooks />}></Route>
    </Routes>
  );
};

export default App;
