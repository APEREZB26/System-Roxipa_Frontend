import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login, Register } from "../views/auth";
import { Homepage } from "../views/Homepage";
import { ListProduct } from "../views/ListProduct";
import { Product } from "../views/Product";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/admin/listProduct" element={<ListProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}
