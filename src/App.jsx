import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "@/layouts";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Main />} />

    </Routes>
  );
}

export default App;