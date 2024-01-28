import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { flushSync } from "react-dom";

const Product = ({
  product: {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  },
}) => {
  const { AddCart,setProducts,products,isInCart } = useContext(DataContext);
  const [isAdd, setIsAdd] = useState(false);
  // const isInCart=products.isAddinCart
  // console.log(isInCart)
  // const delProduct=products.filter(pd)


  const productCartBtnHandler = () => {
    setIsAdd(!isAdd);
    // delProduct=true
    const newCart = {
      id,
      image,
      title,
      price,
      cost: price,
      Product_id: id,
      isAddtoCart : true,
    };
    
    AddCart(newCart);
    isInCart(newCart.id);
    // console.log(newCart.Product_id)
  };

  //   const stars = Array.from({ lenght: 5 }, (_, index) => index);
  //   console.log(stars);

  return (
    <div className="product-card group" id={id}>
      <img
        className="product-card-img group-hover:-rotate-6 duration-300 transition-transform h-32 ms-5 -mb-16"
        //   src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        src={image}
      />
      <div className="product-card-body border border-neutral-600 p-5">
        <p className="product-card-title font-heading text-xl line-clamp-1 font-bold mt-14 mb-2">
          {/* Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops */}
          {title}
        </p>
        <p className="product-card-description text-neutral-500 text-sm mb-4 line-clamp-3">
          {/* Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday */}
          {description}
        </p>
        <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
          <div className="rating-stars flex gap-1">
            {/* <p>Nay Kaung </p> */}
            <svg
              // key={star}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 stroke-orange-400 fill-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <svg
              // key={star}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 stroke-orange-400 false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            {/* {stars.map((star) => {
              // console.log(star)
              if (star < rate.toFixed(0)) {
                return (
                   
                );
              } else {
                return (
                 
                );
              }
            })} */}
          </div>
          <p className="rating-text">
            ({rate} / {count})
          </p>
        </div>
        <p className="product-card-price font-heading font-bold text-xl mb-3">
          $ <span className="price">{price}</span>
        </p>
        <button
          disabled={isAdd}
          onClick={productCartBtnHandler}
          className="add-to-cart duration-100 active:scale-90 border border-neutral-600 block w-full h-12 font-heading disabled:bg-gray-500 disabled:pointer-events-none disabled:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
