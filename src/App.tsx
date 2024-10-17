// import './App.css'

import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
