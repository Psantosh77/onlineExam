import { Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage";
import QuestionPage from "./page/QuestionPage";
import Result from "./page/Result";
import { useEffect, useState } from "react";
import questionData from "./data/question";

function App() {
 
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question" element={<QuestionPage  />} />
      <Route path="/results" element={<Result />} />
    </Routes>
  );
}

export default App;
