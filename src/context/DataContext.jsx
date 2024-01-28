import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);

  const toggleCartDrawedr = () => setCartDrawer(!cartDrawer);

  const [carts, serCarts] = useState([]);
  const [products, setProducts] = useState([]);
  // console.log(carts);
  console.log(products)
  // const currentCurt=products.find((pd)=>pd.Product_id!=id )
  // const currentCurtisAdd=currentCurt.isAddinCart
  const [currentCurtisAdd,setcurrentCurtisAdd]=useState(false)
  

  const AddCart = (newCart) => {
    serCarts([...carts, newCart]);
  };

  // const [isAdd, setIsAdd] = useState(false);
  const isInCart=()=>{                
  }

  const delCart = (id) => {
    serCarts(carts.filter((cart) => cart.Product_id != id));
  };

  const selectCoategory = (selectCatoegoryName) => {
    setProducts([]);
    setProducts(
      products.filter((product) => product.category === selectCatoegoryName)
    );
  };

  return (
    <DataContext.Provider
      value={{
        cartDrawer,
        toggleCartDrawedr,
        AddCart,
        carts,
        serCarts,
        products,
        setProducts,
        selectCoategory,
        delCart,
        isInCart
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
