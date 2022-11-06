import { BrowserRouter, Route, Routes } from "react-router-dom";

import fritolay from "../assets/fritolay.png"; // Evitar usar esto
import { Login, Register } from "../views/auth";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
      <img src={fritolay} alt="fritolay" className="frito"></img>
    </BrowserRouter>
  );
}
