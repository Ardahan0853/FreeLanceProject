import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import UserLogin from "./user/UserLogin";
import CoachLogin from "./user/CoachLogin";
import Dashboard from "./user/adminrules/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/coachlogin" element={<CoachLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
