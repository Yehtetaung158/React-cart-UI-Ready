import React from "react";

const ProductLoader = () => {
  return (
    <div className="animate-pulse">
      <svg
        className=" product-card-img group-hover:-rotate-6 duration-300 transition-transform h-32 ms-5 -mb-16
 text-gray-400 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
      <div className="product-card-body border border-neutral-600 p-5">
        <div className="product-card-title font-heading text-xl line-clamp-1 font-bold mt-14 mb-2">
          {/* Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops */}
          {/* {title} */}
          <div className="h-2.5 bg-gray-400 rounded-full w-48 mb-4" />
        </div>
        <div className="product-card-description text-neutral-500 text-sm mb-4 line-clamp-3">
          {/* Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday */}
          {/* {description} */}
          <div>
            <div>
              <div className="h-2 bg-gray-400 rounded-full max-w-[480px] mb-2.5" />
              <div className="h-2 bg-gray-400 rounded-full mb-2.5" />
              <div className="h-2 bg-gray-400 rounded-full max-w-[440px] mb-2.5" />
              <div className="h-2 bg-gray-400 rounded-full max-w-[460px] mb-2.5" />
              <div className="h-2 bg-gray-400 rounded-full max-w-[360px]" />
            </div>
          </div>
        </div>
        <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
          <div className="rating-stars flex gap-1">
            {/* <p>Nay Kaung </p> */}
            <div className="h-2.5 bg-gray-400 rounded-full w-48 mb-4" />

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
          <div className="h-2.5 bg-gray-400 rounded-full w-48 mb-4" />
        </div>
        <div className="product-card-price font-heading font-bold text-xl mb-3">
        <div className="h-2.5 bg-gray-400 rounded-full w-48 mb-4" />
        </div>
        <button className="add-to-cart duration-100 bg-gray-400 active:scale-90 border border-neutral-600 block w-full h-12 font-heading"></button>
      </div>
      {/* <div class="w-full">
        
       
    </div> */}
    </div>
  );
};

export default ProductLoader;
