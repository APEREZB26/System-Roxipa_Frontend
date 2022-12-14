import { useParams } from "react-router-dom";
import { HeaderAdmin } from "../components/ui/HeaderAdmin";
import axios from "axios";
import { useEffect, useState } from "react";

export const EditProduct = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const url = `http://localhost:3000/api/product/get-products`;
      const result = await axios.get(url);

      setProduct(result.data.products);
    };
    getProducts();
  }, []);

  const names = product.map((nombres)=>{
        return nombres.name
  })


  return (
    <div className="product_Body">
      <HeaderAdmin />
      <div className="category-content">
        {""}
      </div>
    </div>
  );
};
