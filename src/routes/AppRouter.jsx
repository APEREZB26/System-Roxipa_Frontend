import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

import { Login, Register } from "../views/auth";
import { Homepage } from "../views/Homepage";
import { ListProduct } from "../views/ListProduct";
import { ListClient } from "../views/ListClient";
import { Product } from "../views/Product";
import { EditProduct } from "../views/EditProduct";

export function AppRouter() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Navigate to="/auth/login" /> </>}/>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/admin/listProduct" element={<ListProduct />} />
          <Route path="/admin/listClient" element={<ListClient />} />
          <Route path="/admin/editProduct/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
