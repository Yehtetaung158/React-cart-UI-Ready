import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { productApi } from "../api/product";
import Product from "./Product";
import ProductLoader from "./ProductLoader";
import { DataContext } from "../context/DataContext";

const ProductGroup = () => {
  const {products,setProducts}=useContext(DataContext)
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsReady(!isReady);
      const res = await productApi.get("/");
      const Data=res.data
      setProducts(Data);
      Data.map((dt)=>console.log(dt.isAddinCart=false))
      setIsReady(false);
      console.log(Data)
    };
    fetchProducts();
  }, []);

  return (
    <section className="product-list mb-10">
      <Container>
        <div
          id="productList"
          className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {isReady && (
            <>
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
            </>
          )}

          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGroup;
