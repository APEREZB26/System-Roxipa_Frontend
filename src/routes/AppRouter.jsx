import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login, Register } from "../views/auth";
import { Homepage } from "../views/Homepage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
