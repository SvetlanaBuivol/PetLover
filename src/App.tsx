// import './App.css'

import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NoticesPage from "./pages/NoticesPage";
import FriendsPage from "./pages/FriendsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<FriendsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
