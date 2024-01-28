import React, { useState } from "react";
import Container from "./Container";
import { categoryApi } from "../api/categories";
import Category from "./Category";

const CategoryGroup = () => {

  const [ready,setReady]=useState(true)

  const[category,setGatecory]=useState([]);
  useState(()=>{
      const fetchGatecories=async()=>{
        const res= await categoryApi.get("/");
        setGatecory(res.data)
        setReady(!ready)
      }
      fetchGatecories();
  },[])

  return (
    <section className="category-list mb-10 py-3">
      <Container>
        <p className="font-heading mb-2">Select Categories</p>
        <div
          id="categoryList"
          className="flex gap-3 select-none overflow-scroll"
        >
          
          {ready && (<div className="flex gap-3 animate-pulse">
            <button className="border border-neutral-200 px-4 py-1 flex items-center">
              <span className="inline-block bg-neutral-200 w-24 h-4" />
            </button>
            <button className="border border-neutral-200 px-4 py-1 flex items-center">
              <span className="inline-block bg-neutral-200 w-24 h-4" />
            </button>
            <button className="border border-neutral-200 px-4 py-1 flex items-center">
              <span className="inline-block bg-neutral-200 w-24 h-4" />
            </button>
          </div>)}
          {category.map((cat,index)=><Category cat={cat} key={index}/>)}
        </div>
      </Container>
    </section>
  );
};

export default CategoryGroup;
