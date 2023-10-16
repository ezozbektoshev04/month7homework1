import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Students from "./components/Students";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
