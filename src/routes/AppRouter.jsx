import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login, Register } from "../views/auth";
import { Homepage } from "../views/Homepage";
import { ListProduct } from "../views/ListProduct";
import { ListClient } from "../views/ListClient";
import { Product } from "../views/Product";
import { Message } from "../components/ui/Message";

export function AppRouter() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Message/>}/>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/admin/listProduct" element={<ListProduct />} />
          <Route path="/admin/listClient" element={<ListClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
